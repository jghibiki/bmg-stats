
import { Component, For, createMemo, createEffect, createSignal, Show } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata, SupplementaryEventData } from '../MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import { SolidApexCharts } from 'solid-apexcharts';
import TornamentVictoryPointsChart from '../../charts/TornamentVictoryPointsChart';
import CrewVictoryPointsChart from '../../charts/CrewVictoryPointsChart';
import AverageCrewVictoryPointsChart from '../../charts/AverageCrewVictoryPointsChart';
import PlayersPerCrew from '../../charts/PlayersPerCrew';
import BossCountByCrew from '../../charts/BossCountByCrew';

const CrewCompositionReport: Component<{
    event: EventMetadata | null,
    supplimentaryMetrics: SupplementaryEventData | null,
    metrics: MetricsObject
    excludeMaskedPlayers: boolean | null
}> = (props) => {
    const statsList = createMemo(() => props.metrics.stats)
    const supMetrics = createMemo(() => props.supplimentaryMetrics)


    return (
        <>
            <div style={{ topMargin: "10px" }}>
                <PlayersPerCrew metrics={statsList()} />
            </div>

            <Show when={supMetrics() !== null}>
                <BossCountByCrew metrics={supMetrics()!} />
            </Show>

        </>
    );

}

export default CrewCompositionReport;