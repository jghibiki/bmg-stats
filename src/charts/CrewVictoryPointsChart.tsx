import { Component, createMemo, createSignal, createEffect, Show } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { SolidApexCharts } from 'solid-apexcharts';

const CrewVictoryPointsChart: Component<{
    metrics: Array<MatchResult>
}> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var crewAggregations = new Map<string, number>()

        for (var metric of statsList()) {
            let crew = metric.crew
            crewAggregations.set(
                crew,
                (+metric.vp) + (crewAggregations.has(crew) ? crewAggregations.get(crew)! : 0)
            )
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

            xaxis: {
                categories: Array.from(crewAggregations.keys())
            },
        })

        setChartSeries([{
            name: 'Victory Points',
            data: Array.from(crewAggregations.values())
        }])

    })


    return (
        <>
            <h3>Total Crew Victory Points</h3>
            <h4>Sum of all VPs</h4>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default CrewVictoryPointsChart;