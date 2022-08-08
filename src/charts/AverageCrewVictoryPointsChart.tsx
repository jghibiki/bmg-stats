import { Component, createMemo, createSignal, createEffect, Show } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { SolidApexCharts } from 'solid-apexcharts';

const AverageCrewVictoryPointsChart: Component<{
    metrics: Array<MatchResult>
}> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var crewAggregations = new Map<string, number>()
        var roundTracker = new Array<number>()
        var crewPlayerCounts = new Map<string, Array<string>>()

        for (var metric of statsList()) {
            let crew = metric.crew
            let player = metric.player
            crewAggregations.set(
                crew,
                (+metric.vp) + (crewAggregations.has(crew) ? crewAggregations.get(crew)! : 0)
            )


            if (!crewPlayerCounts.has(crew)) {
                crewPlayerCounts.set(crew, [player])
            }
            else {
                let crewList = crewPlayerCounts.get(crew)!
                if (!crewList.includes(player)) {
                    crewList.push(player)
                }
            }


            if (!roundTracker.includes(metric.round)) {
                roundTracker.push(metric.round)
            }
        }

        var adjustedCrewAggregations = new Map<string, number>()
        for (var el of crewAggregations) {
            const crew = el[0]
            const stats = el[1]
            const numPlayers = crewPlayerCounts.get(crew)!.length
            const numRounds = roundTracker.length

            adjustedCrewAggregations.set(
                crew, +(stats / numPlayers / numRounds).toFixed(2)
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
            theme: {
                "mode": "dark",
            },
            colors: ["#ab8412", "#1A41AB", "#465ad8", "#D8C446"],
            xaxis: {
                categories: Array.from(adjustedCrewAggregations.keys())
            },
        })

        setChartSeries([{
            name: 'Victory Points',
            data: Array.from(adjustedCrewAggregations.values())
        }])

    })


    return (
        <>
            <h3>Average Victory Points</h3>
            <h4> Average tournament round VPs for each crew</h4>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default AverageCrewVictoryPointsChart;