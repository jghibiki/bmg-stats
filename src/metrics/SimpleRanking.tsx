import { Component, For, createMemo } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection } from "solid-simple-table"
import 'solid-simple-table/dist/SimpleTable.css'

const SimpleRanking: Component<{ metrics: MetricsObject, event: string }> = (props) => {

    var statsList = createMemo(() => props.metrics.stats)

    return (
        <SimpleTable rows={statsList()} />
    );

}

export default SimpleRanking;