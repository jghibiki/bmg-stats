import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { calculateCrewPlayerCounts, convertTp } from '../Utils'
import { SolidApexCharts } from 'solid-apexcharts';

const AverageCrewVpWdlChart: Component<{ metrics: Array<MatchResult> }> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        const wdlIndexer = ["W", "D", "L"]
        var crewAggregations = new Map<string, Array<string>>()
        var wdlVpAggs = new Map<string, Array<number>>()

        for (var metric of statsList()) {
            let crew = metric.crew
            let wdl = convertTp(+metric.tp)
            let wdlIndex = wdlIndexer.indexOf(wdl)

            crewAggregations.set(
                crew,
                [wdl, ...(crewAggregations.get(crew) || [])]
            )

            let _wdlVpAggs: Array<number> = wdlVpAggs.get(crew) || [0, 0, 0]
            _wdlVpAggs[wdlIndex] += +metric.vp
            wdlVpAggs.set(
                crew, _wdlVpAggs
            )
        }

        var wins = Array<number>()
        var draws = Array<number>()
        var losses = Array<number>()

        for (let el of crewAggregations) {
            const crew = el[0]
            const results = el[1]
            const vpAgg = wdlVpAggs.get(crew)!

            const w = results.filter((e) => e === "W").length
            wins.push(+(vpAgg[0] / w).toFixed(2))

            const d = results.filter((e) => e === "D").length
            draws.push(+(vpAgg[1] / w).toFixed(2))

            const l = results.filter((e) => e === "L").length
            losses.push(+(vpAgg[2] / w).toFixed(2))
        }

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
                categories: Array.from(crewAggregations.keys()),
                decimalsInFloat: 2
            },
            yaxis:{
                decimalsInFloat: 2
            }
        })

        setChartSeries([
            {
                name: "Wins",
                data: wins
            },
            {
                name: "Draws",
                data: draws
            },
            {
                name: "Losses",
                data: losses
            },
        ])

    })


    return (
        <>
            <h3>Average VP by W/D/L</h3>
            <p>Average number of VP earned by a crew when they won, drew, or lost.</p>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default AverageCrewVpWdlChart;