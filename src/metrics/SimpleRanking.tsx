import { Component, For } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import 'solid-simple-table/dist/SimpleTable.css'

const SimpleRanking: Component<{ event: EventMetadata, metrics: MetricsObject }> = ({ event, metrics }) => {
    var statsList = metrics.stats

    return (
        <SimpleTable rows={statsList} />
    );

}

export default SimpleRanking;