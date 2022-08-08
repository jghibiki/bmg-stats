import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { convertTp } from '../Utils'
import { SolidApexCharts } from 'solid-apexcharts';

const CrewWdlChart: Component<{ metrics: Array<MatchResult> }> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var crewAggregations = new Map<string, Array<string>>()

        for (var metric of statsList()) {
            let crew = metric.crew
            let wdl = convertTp(+metric.tp)

            crewAggregations.set(
                crew,
                [wdl, ...(crewAggregations.get(crew) || [])]
            )
        }

        var wins = Array<number>()
        var draws = Array<number>()
        var losses = Array<number>()

        for (let el of crewAggregations) {
            const crew = el[0]
            const results = el[1]

            const w = results.filter((e) => e === "W").length
            wins.push(w)

            const d = results.filter((e) => e === "D").length
            draws.push(d)

            const l = results.filter((e) => e === "L").length
            losses.push(l)
        }

        setChartOptions({
            chart: {
                id: "chart",
                width: "100%",
                stacked: true
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
            <h3>Crew W/D/L Stats</h3>
            <p>Note: This chart is not normaized by number of players. This is to help indicate which crews have a larger sample size of matches.</p>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default CrewWdlChart;