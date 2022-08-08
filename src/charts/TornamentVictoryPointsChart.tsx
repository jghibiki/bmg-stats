import { Component, createMemo, createSignal, createEffect, Show } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { SolidApexCharts } from 'solid-apexcharts';

const TornamentVictoryPointsChart: Component<{
    metrics: Array<MatchResult>
    excludeMaskedPlayers: boolean | null
}> = (props) => {
    var statsList = createMemo(() => {
        let stats = props.metrics
        if (props.excludeMaskedPlayers) {
            return stats.filter(e => e.player.length !== 1)
        }
        return stats
    })

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {
        var playerAggregations = new Map<string, number>()

        for (var metric of statsList()) {
            let player = metric.player
            playerAggregations.set(
                player,
                (+metric.vp) + (playerAggregations.has(player) ? playerAggregations.get(player)! : 0)
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
                categories: Array.from(playerAggregations.keys())
            },
        })

        setChartSeries([{
            name: 'Victory Points',
            data: Array.from(playerAggregations.values())
        }])

    })


    return (
        <>
            <h3>Tornament Victory Points for each Player</h3>
            <Show when={props.excludeMaskedPlayers}>
                <p>*Only displaying unmasked players.</p>
            </Show>
            <SolidApexCharts width="500" type="bar" options={chartOptions()} series={chartSeries()} />
        </>
    )
}

export default TornamentVictoryPointsChart;