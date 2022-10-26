import { Component, createSignal, For, Switch, Match, createMemo, createEffect } from 'solid-js';
import { useParams } from "solid-app-router"
import { MetricsObject, EventMetadata } from './MetricsObject'
import SimpleRanking from './reports/SimpleRanking'
import VictoryPointsReport from './reports/VictoryPointsReport'
import WinLossMetrics from './reports/WinLossMetrics'
import eventManifest from '../EventManifest';
import { Form, Container, Row, Col } from "solid-bootstrap"
const metricsFiles = import.meta.glob('../events/*.json')

enum ReportType {
    SIMPLE_RANKING,
    VICTORY_POINT_PLOT,
    WIN_LOSS_METRICS,
    // TODO
    // casualty points
    // vp to causualty points
    // tp to casualty points
    // placings table
    // event metrics
    // overview metrics, number of players, players per crew, event counts, deployment counts
}

const reportTypes = [
    { name: "Ranking", type: ReportType.SIMPLE_RANKING },
    { name: "Victory Point Metrics", type: ReportType.VICTORY_POINT_PLOT },
    { name: "Win Loss Metrics", type: ReportType.WIN_LOSS_METRICS }
]

const SingleEventMetricsRoot: Component = () => {
    const eventSlug = createMemo(() => useParams().slug)
    const selectedEvent = createMemo(() => eventManifest.find((e) => e.slug === eventSlug()) as EventMetadata)

    const [selectedMetricsReport, setSelectedMetricsReport] = createSignal(ReportType.SIMPLE_RANKING)
    const [metrics, setMetrics] = createSignal<MetricsObject | null>(null)

    createEffect(() => {

        if (selectedEvent() !== null && selectedEvent() !== undefined) {
            const eventFile = "../events/" + selectedEvent().stats
            if (eventFile in metricsFiles) {
                metricsFiles[eventFile]().then((data) => {
                    setMetrics(data as MetricsObject)
                })
            }
        }
    })

    function handleDropDownChange(e: Event) {
        const value = +e.target.value
        for (var reportType of reportTypes) {
            if (value === reportType.type) {
                setSelectedMetricsReport(reportType.type)
            }
        }
    }


    return (
        <Container fluid>
            <Switch fallback={<p>Please select an event from the sidebar.</p>}>
                <Match when={selectedEvent !== null && selectedEvent !== undefined}>
                    <Container class="text-center" fluid>
                        <h3>{selectedEvent().name} - {selectedEvent().date}</h3>
                        <Form
                        >
                            <Form.Select
                                style={{
                                    padding: "10px",
                                    "margin-top": "10px",
                                    "margin-bottom": "15px",
                                    "max-width": "300px",
                                    "display": "inline",
                                }}
                                onChange={handleDropDownChange}
                                value={selectedMetricsReport()}
                            >
                                <For each={reportTypes}>{(reportType, i) =>
                                    <option value={reportType.type}>{reportType.name}</option>
                                }</For>
                            </Form.Select>
                        </Form>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col xs={2}></Col>
                            <Col>
                                <Switch fallback={<p>Loading metrics...</p>}>
                                    <Match when={metrics() !== null && metrics() !== undefined}>
                                        <Switch>
                                            <Match when={selectedMetricsReport() === ReportType.SIMPLE_RANKING}>
                                                <SimpleRanking
                                                    event={selectedEvent()}
                                                    metrics={metrics()!}
                                                    excludeMaskedPlayers={false}
                                                />
                                            </Match>
                                            <Match when={selectedMetricsReport() === ReportType.VICTORY_POINT_PLOT}>
                                                <VictoryPointsReport event={selectedEvent()} metrics={metrics()!} />
                                            </Match>
                                            <Match when={selectedMetricsReport() === ReportType.WIN_LOSS_METRICS}>
                                                <WinLossMetrics event={selectedEvent()} metrics={metrics()!} />
                                            </Match>
                                        </Switch>
                                    </Match>
                                </Switch>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                    </Container>
                </Match>
            </Switch>
        </Container>
    );
};

export default SingleEventMetricsRoot;