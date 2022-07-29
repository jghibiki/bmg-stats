
import { Component, For, createMemo, createEffect, createSignal } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import { SolidApexCharts } from 'solid-apexcharts';

const VictoryPointsReport: Component<{ event: EventMetadata, metrics: MetricsObject }> = (props) => {
    const statsList = createMemo(() => props.metrics.stats)
    const [playerOptions, setPlayerOptions] = createSignal()
    const [playerSeries, setPlayerSeries] = createSignal()

    const [crewOptions, setCrewOptions] = createSignal()
    const [crewSeries, setCrewSeries] = createSignal()

    const [adjustedCrewOptions, setAdjustedCrewOptions] = createSignal()
    const [adjustedCrewSeries, setAdjustedCrewSeries] = createSignal()



    createEffect(() => {
        var playerAggregations = new Map<string, number>()
        var crewAggregations = new Map<string, number>()
        var crewPlayerCounts = new Map<string, Array<string>>()
        var adjustedCrewAggregations = new Map<string, number>()


        for (var metric of statsList()) {
            let player = metric.player
            let crew = metric.crew
            playerAggregations.set(
                player,
                (+metric.vp) + (playerAggregations.has(player) ? playerAggregations.get(player)! : 0)
            )

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
        }

        for (var el of crewAggregations) {
            const crew = el[0]
            const stats = el[1]
            const numPlayers = crewPlayerCounts.get(crew)!.length

            adjustedCrewAggregations.set(
                crew, +(stats / numPlayers).toFixed(2)
            )

        }


        setPlayerOptions({
            chart: {
                id: "chart",
                width: "100%",
            },
            xaxis: {
                categories: Array.from(playerAggregations.keys())
            },
        })

        setPlayerSeries([{
            name: 'Victory Points',
            data: Array.from(playerAggregations.values())
        }])


        setCrewOptions({
            chart: {
                id: "chart",
                width: "100%",

            },
            xaxis: {
                categories: Array.from(crewAggregations.keys())
            },
        })

        setCrewSeries([{
            name: 'Victory Points',
            data: Array.from(crewAggregations.values())
        }])

        setAdjustedCrewOptions({
            chart: {
                id: "chart",
                width: "100%",
            },
            xaxis: {
                categories: Array.from(adjustedCrewAggregations.keys())
            },
        })

        setAdjustedCrewSeries([{
            name: 'Victory Points',
            data: Array.from(adjustedCrewAggregations.values())
        }])
    })

    return (
        <>
            <h3>Player Victory Points</h3>
            <SolidApexCharts width="500" type="bar" options={playerOptions()} series={playerSeries()} />

            <h3>Total Crew Victory Points</h3>
            <h4>Sum of all VPs</h4>
            <SolidApexCharts width="500" type="bar" options={crewOptions()} series={crewSeries()} />

            <h3>Average Victory Points</h3>
            <h4> Average victory points for each crew</h4>
            <SolidApexCharts width="500" type="bar" options={adjustedCrewOptions()} series={adjustedCrewSeries()} />
        </>
    );

}

export default VictoryPointsReport;