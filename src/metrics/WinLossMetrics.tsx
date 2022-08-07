
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

    const [wdlVpRatioOptions, setWdlVpRatioOptions] = createSignal()
    const [wdlVpRatioSeries, setWdlVpRatioSeries] = createSignal()

    const [tpVpRatioOptions, setTpVpRatioOptions] = createSignal()
    const [tpVpRatioSeries, setTpVpRatioSeries] = createSignal()


    createEffect(() => {
        const wdlIndexer = ["W", "D", "L"]
        var crewAggregations = new Map<string, Array<string>>()
        var crewPlayerCounts = new Map<string, Array<string>>()
        var adjustedCrewAggregations = new Array<number>()
        var vpAggs = new Map<string, number>()
        var wdlVpAggs = new Map<string, Array<number>>()
        var tpAggs = new Map<string, number>()
        var tpToVpAggregations = new Map<string, number>()

        for (var metric of statsList()) {
            let player = metric.player
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

        var averageWins = Array<number>()
        var averageDraws = Array<number>()
        var averageLosses = Array<number>()

        var vpWinRatio = Array<number>()
        var vpDrawRatio = Array<number>()
        var vpLossRatio = Array<number>()

        for (let el of crewAggregations) {
            const crew = el[0]
            const results = el[1]
            const playerCOunt = crewPlayerCounts.get(crew)!.length
            const vpAgg = wdlVpAggs.get(crew)!

            const w = results.filter((e) => e === "W").length
            wins.push(w)
            averageWins.push(+(w / playerCOunt).toFixed(2))
            vpWinRatio.push(+(vpAgg[0] / w).toFixed(2))

            const d = results.filter((e) => e === "D").length
            draws.push(d)
            averageDraws.push(+(d / playerCOunt).toFixed(2))
            vpDrawRatio.push(+(vpAgg[1] / d).toFixed(2))

            const l = results.filter((e) => e === "L").length
            losses.push(l)
            averageLosses.push(+(l / playerCOunt).toFixed(2))
            vpLossRatio.push(+(vpAgg[2] / l).toFixed(2))
        }

        for (let el of tpAggs) {
            const crew = el[0]
            const tp = el[1]
            const vp = vpAggs.get(crew)!

            tpToVpAggregations.set(
                crew, +((vp / tp)).toFixed(2)
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
                data: averageWins
            },
            {
                name: "Draws",
                data: averageDraws
            },
            {
                name: "Losses",
                data: averageLosses
            },

        ])

        setWdlVpRatioOptions({
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

        setWdlVpRatioSeries([
            {
                "name": "Wins",
                data: vpWinRatio
            },
            {
                "name": "Draw",
                data: vpDrawRatio
            },
            {
                "name": "Loss",
                data: vpLossRatio
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
            name: 'One TP is worth X VP',
            data: Array.from(tpToVpAggregations.values())
        }])
    })


    return (
        <>
            <h3>Crew W/D/L Stats</h3>
            <SolidApexCharts width="500" type="bar" options={crewOptions()} series={crewSeries()} />

            <h3>Average Crew W/D/L Stats</h3>
            <SolidApexCharts width="500" type="bar" options={adjustedCrewOptions()} series={adjustedCrewSeries()} />

            <h3>Average VP by W/D/L</h3>
            <p>Average number of VP earned by a crew when they won, drew, or lost.</p>
            <SolidApexCharts width="500" type="bar" options={wdlVpRatioOptions()} series={wdlVpRatioSeries()} />

            <h3>VPs per TP ratio</h3>
            <p>One TP is worth roughly X VP's</p>
            <SolidApexCharts width="500" type="bar" options={tpVpRatioOptions()} series={tpVpRatioSeries()} />
        </>
    );

}

export default VictoryPointsReport;