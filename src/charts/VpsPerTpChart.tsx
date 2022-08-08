import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { convertTp } from '../Utils'
import { SolidApexCharts } from 'solid-apexcharts';

const CrewWdlChart: Component<{ metrics: Array<MatchResult> }> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var tpAggs = new Map<string, number>()
        var vpAggs = new Map<string, number>()

        for (var metric of statsList()) {
            let crew = metric.crew
            let wdl = convertTp(+metric.tp)

            vpAggs.set(
                crew,
                (+metric.vp) + (vpAggs.has(crew) ? vpAggs.get(crew)! : 0)
            )

            tpAggs.set(
                crew,
                (+metric.tp) + (tpAggs.has(crew) ? tpAggs.get(crew)! : 0)
            )
        }

        var tpToVpAggregations = new Map<string, number>()
        for (let el of tpAggs) {
            const crew = el[0]
            const tp = el[1]
            const vp = vpAggs.get(crew)!

            tpToVpAggregations.set(
                crew, +((vp / tp)).toFixed(2)
            )
        }

        var sorted = Array.from(tpToVpAggregations.keys()).map(e => {
            return [e, tpToVpAggregations.get(e)]
        }).sort((a, b) => b[1] - a[1])

        setChartOptions({
            chart: {
                id: "chart",
                width: "100%",
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            theme: {
                "mode": "dark",
            },
            colors: ["#ab8412", "#1A41AB", "#465ad8", "#D8C446"],
            xaxis: {
                categories: Array.from(sorted.map(e => e[0]))
            },
        })

        setChartSeries([{
            name: 'One TP is worth X VP',
            data: Array.from(sorted.map(e => e[1]))
        }])

    })


    return (
        <>
            <h3>VPs per TP ratio</h3>
            <p>One TP is worth roughly X VP's</p>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default CrewWdlChart;