
import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MetricsObject, EventMetadata } from '../MetricsObject';
import { convertTp } from '../../Utils'
import CrewWdlChart from '../../charts/CrewWdlChart';
import AverageCrewWdlChart from '../../charts/AverageCrewWdlChart';
import AverageCrewVpWdlChart from '../../charts/AverageCrewVpWdlChart';
import VpsPerTpChart from '../../charts/VpsPerTpChart';


const VictoryPointsReport: Component<{ event: EventMetadata | null, metrics: MetricsObject }> = (props) => {
    var statsList = createMemo(() => props.metrics.stats)

    return (
        <>
            <CrewWdlChart metrics={statsList()} />

            <AverageCrewWdlChart metrics={statsList()} />

            <AverageCrewVpWdlChart metrics={statsList()} />

            <VpsPerTpChart metrics={statsList()} />

        </>
    );

}

export default VictoryPointsReport;