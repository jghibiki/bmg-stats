
import { Component, For } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import { SolidApexCharts } from 'solid-apexcharts';

const VictoryPointsReport: Component<{ event: EventMetadata, metrics: MetricsObject }> = ({ event, metrics }) => {
    var statsList = metrics.stats

    var crewAggregations = new Map<string, number>()
    var crewPlayerCounts = new Map<string, Array<string>>()
    var adjustedCrewAggregations = new Map<string, number>()
    var vpAggs = new Map<string, number>()
    var tpAggs = new Map<string, number>()
    var tpToVpAggregations = new Map<string, number>()

    function convertTp(tp: number) {
        if (tp == 0) {
            return -1
        }
        else if (tp == 2) {
            return 0
        }
        else {
            return 1
        }
    }

    for (var metric of statsList) {
        let player = metric.player
        let crew = metric.crew

        crewAggregations.set(
            crew,
            convertTp(+metric.tp) + (crewAggregations.has(crew) ? crewAggregations.get(crew)! : 0)
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

    for (var el of tpAggs) {
        const crew = el[0]
        const tp = el[1]
        const vp = vpAggs.get(crew)!
        const numPlayers = crewPlayerCounts.get(crew)!.length

        tpToVpAggregations.set(
            crew, +((tp / vp)).toFixed(2)
        )
    }

    for (var el of crewAggregations) {
        const crew = el[0]
        const stats = el[1]
        const numPlayers = crewPlayerCounts.get(crew)!.length

        adjustedCrewAggregations.set(
            crew, +(stats / numPlayers).toFixed(2)
        )

    }


    const crewOptions = {
        chart: {
            id: "chart",
            width: "100%",
        },
        xaxis: {
            categories: Array.from(crewAggregations.keys())
        },
    }

    const crewSeries = [{
        name: 'Win-Loss Stat',
        data: Array.from(crewAggregations.values())
    }]

    const adjustedCrewOptions = {
        chart: {
            id: "chart",
            width: "100%",
        },
        xaxis: {
            categories: Array.from(adjustedCrewAggregations.keys())
        },
    }

    const adjustedCrewSeries = [{
        name: 'Win-Loss Stat',
        data: Array.from(adjustedCrewAggregations.values())
    }]

    const tpVpRatioOptions = {
        chart: {
            id: "chart",
            width: "100%",
        },
        xaxis: {
            categories: Array.from(tpToVpAggregations.keys())
        },
    }

    const tpVpRatioSeries = [{
        name: 'Victory Points',
        data: Array.from(tpToVpAggregations.values())
    }]

    console.log(vpAggs)


    return (
        <>
            <h3>Crew Win Stats</h3>
            <h4>Positive indicates more wins than losses. Zero indicates equal likelihood of wins and losses, or all draws.</h4>
            <SolidApexCharts width="500" type="bar" options={crewOptions} series={crewSeries} />

            <h3>Adjusted Crew Win Stats</h3>
            <h4>Adjusted for the number of players per crew</h4>
            <SolidApexCharts width="500" type="bar" options={adjustedCrewOptions} series={adjustedCrewSeries} />

            <h3>TP to VP ratio</h3>
            <SolidApexCharts width="500" type="bar" options={tpVpRatioOptions} series={tpVpRatioSeries} />
        </>
    );

}

export default VictoryPointsReport;