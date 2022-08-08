
import { Component, For, createMemo, createEffect, createSignal } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from '../MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import { SolidApexCharts } from 'solid-apexcharts';
import TornamentVictoryPointsChart from '../../charts/TornamentVictoryPointsChart';
import CrewVictoryPointsChart from '../../charts/CrewVictoryPointsChart';
import AverageCrewVictoryPointsChart from '../../charts/AverageCrewVictoryPointsChart';

const VictoryPointsReport: Component<{
    event: EventMetadata | null,
    metrics: MetricsObject
    excludeMaskedPlayers: boolean | null
}> = (props) => {
    const statsList = createMemo(() => props.metrics.stats)

    return (
        <>
            <TornamentVictoryPointsChart
                metrics={statsList()}
                excludeMaskedPlayers={props.excludeMaskedPlayers}
            />

            <CrewVictoryPointsChart
                metrics={statsList()}
            />

            <AverageCrewVictoryPointsChart
                metrics={statsList()}
            />
        </>
    );

}

export default VictoryPointsReport;