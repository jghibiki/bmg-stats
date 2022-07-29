
import { Component, For, createMemo, createSignal, createEffect } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import { SolidApexCharts } from 'solid-apexcharts';


function convertTp(tp: number) {
    if (tp == 0) {
        return "L"
    }
    else if (tp == 2) {
        return "D"
    }
    else {
        return "W"
    }
}


const VictoryPointsReport: Component<{ event: EventMetadata, metrics: MetricsObject }> = (props) => {
    var statsList = createMemo(() => props.metrics.stats)

    const [crewOptions, setCrewOptions] = createSignal()
    const [crewSeries, setCrewSeries] = createSignal()

    const [adjustedCrewOptions, setAdjustedCrewOptions] = createSignal()
    const [adjustedCrewSeries, setAdjustedCrewSeries] = createSignal()

    const [tpVpRatioOptions, setTpVpRatioOptions] = createSignal()
    const [tpVpRatioSeries, setTpVpRatioSeries] = createSignal()


    createEffect(() => {
        var crewAggregations = new Map<string, Array<string>>()
        var crewPlayerCounts = new Map<string, Array<string>>()
        var adjustedCrewAggregations = new Map<string, number>()
        var vpAggs = new Map<string, number>()
        var tpAggs = new Map<string, number>()
        var tpToVpAggregations = new Map<string, number>()

        for (var metric of statsList()) {
            let player = metric.player
            let crew = metric.crew

            if (crewAggregations.has(crew)) {
                crewAggregations.get(crew)?.push(convertTp(+metric.tp))
            }
            else {
                crewAggregations.set(
                    crew, [convertTp(+metric.tp)]
                )
            }

            vpAggs.set(
                crew,
                (+metric.vp) + (vpAggs.has(crew) ? vpAggs.get(crew)! : 0)
            )

            tpAggs.set(
                crew,
                (+metric.tp) + (tpAggs.has(crew) ? tpAggs.get(crew)! : 0)
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

        var wins = Array<number>()
        var draws = Array<number>()
        var losses = Array<number>()

        var adjustedWins = Array<number>()
        var adjustedDraws = Array<number>()
        var adjustedLosses = Array<number>()

        for (let el of crewAggregations) {
            const crew = el[0]
            const results = el[1]
            const playerCOunt = crewPlayerCounts.get(crew)!.length

            const w = results.filter((e) => e === "W").length
            wins.push(w)
            adjustedWins.push(+(w / playerCOunt).toFixed(2))
            const d = results.filter((e) => e === "D").length
            draws.push(d)
            adjustedDraws.push(+(d / playerCOunt).toFixed(2))
            const l = results.filter((e) => e === "L").length
            losses.push(l)
            adjustedLosses.push(+(l / playerCOunt).toFixed(2))
        }

        for (let el of tpAggs) {
            const crew = el[0]
            const tp = el[1]
            const vp = vpAggs.get(crew)!
            const numPlayers = crewPlayerCounts.get(crew)!.length

            tpToVpAggregations.set(
                crew, +((tp / vp)).toFixed(2)
            )
        }

        setCrewOptions({
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

        setCrewSeries([
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

        setAdjustedCrewOptions({
            chart: {
                id: "chart",
                width: "100%",
                stacked: true,
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

        setAdjustedCrewSeries([
            {
                name: "Wins",
                data: adjustedWins
            },
            {
                name: "Draws",
                data: adjustedDraws
            },
            {
                name: "Losses",
                data: adjustedLosses
            },

        ])

        setTpVpRatioOptions({
            chart: {
                id: "chart",
                width: "100%",
            },
            xaxis: {
                categories: Array.from(tpToVpAggregations.keys())
            },
        })

        setTpVpRatioSeries([{
            name: 'One VP is with X TP',
            data: Array.from(tpToVpAggregations.values())
        }])
    })


    return (
        <>
            <h3>Crew W/D/L Stats</h3>
            <SolidApexCharts width="500" type="bar" options={crewOptions()} series={crewSeries()} />

            <h3>Average Crew W/D/L Stats</h3>
            <SolidApexCharts width="500" type="bar" options={adjustedCrewOptions()} series={adjustedCrewSeries()} />

            <h3>TP to VP ratio</h3>
            <SolidApexCharts width="500" type="bar" options={tpVpRatioOptions()} series={tpVpRatioSeries()} />
        </>
    );

}

export default VictoryPointsReport;