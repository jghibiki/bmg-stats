import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { calculateCrewPlayerCounts, convertTp } from '../Utils'
import { SolidApexCharts } from 'solid-apexcharts';

const AverageCrewWdlChart: Component<{ metrics: Array<MatchResult> }> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var crewAggregations = new Map<string, Array<string>>()
        const crewPlayerCounts = calculateCrewPlayerCounts(statsList())
        const roundTracker = new Set()

        for (var metric of statsList()) {
            let crew = metric.crew
            let wdl = convertTp(+metric.tp)

            crewAggregations.set(
                crew,
                [wdl, ...(crewAggregations.get(crew) || [])]
            )

            roundTracker.add(metric.round)
        }

        var wins = Array<number>()
        var draws = Array<number>()
        var losses = Array<number>()

        for (let el of crewAggregations) {
            const crew = el[0]
            const results = el[1]
            const playerCount = crewPlayerCounts.get(crew)?.size || 0.0001
            const rounds = roundTracker.size


            const w = results.filter((e) => e === "W").length
            wins.push(+(w / playerCount / rounds * 100).toFixed(1))

            const d = results.filter((e) => e === "D").length
            draws.push(+(d / playerCount / rounds * 100).toFixed(1))

            const l = results.filter((e) => e === "L").length
            losses.push(+(l / playerCount / rounds * 100).toFixed(2))
        }

        setChartOptions({
            chart: {
                id: "chart",
                width: "100%",
                stacked: true,
                //stackType: "100%"
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
                max: 100,
                //decimalsInFloat: 2,
                floating: false,
                labels: {
                    formatter: (value: number) => typeof (value) === "string" ? value : +value.toFixed(2)
                }

            },
            yaxis: {
                decimalsInFloat: 2,
            },
        })

        setChartSeries([
            {
                name: "Win Percent",
                data: wins
            },
            {
                name: "Draw Percent",
                data: draws
            },
            {
                name: "Loss Percent",
                data: losses
            },
        ])

    })


    return (
        <>
            <h3>Average Crew W/D/L Percentage</h3>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default AverageCrewWdlChart;