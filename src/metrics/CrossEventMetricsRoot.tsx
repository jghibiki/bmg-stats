import { Component, createSignal, For, Switch, Match, createMemo, createEffect, Show } from 'solid-js';
import { MetricsObject, EventMetadata, MatchResult, SupplementaryEventData } from './MetricsObject'
import { useSearchParams, useIsRouting } from "solid-app-router"
import SimpleRanking from './reports/SimpleRanking'
import VictoryPointsReport from './reports/VictoryPointsReport'
import WinLossMetrics from './reports/WinLossMetrics'
import eventManifest from '../EventManifest';
const metricsFiles = import.meta.glob('../events/*.json')
const supplimentaryMetricsFiles = import.meta.glob('../supplimentary_event_data/*.json')
import { Form, Container, Row, Col, Accordion, Spinner } from "solid-bootstrap"

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


const CrossEventMetricsRoot: Component = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [format, setFormat] = createSignal(searchParams.format || "")
    const currentSlug = createMemo(() => searchParams.slugs || "")
    const [updatedSlug, setUpdatedSlug] = createSignal<string | null>(null)
    const [metricsToLoad, setMetricsToLoad] = createSignal(0)


    // Load metrics signals
    const [loadedMetrics, setLoadedMetrics] = createSignal(0)
    const [loadMetrics, setLoadMetrics] = createSignal(false)
    const [metricResults, setMetrics] = createSignal(new Array<MatchResult>())

    // Load supplimentary metrics Signals
    const [loadedSupMetrics, setLoadedSubMetrics] = createSignal(0)
    const [loadSupMetrics, setLoadSupMetrics] = createSignal(false)
    const [supMetricResults, setSupMetrics] = createSignal(new Array<SupplementaryEventData>())

    const selectedSlugs = createMemo(() => {
        if (currentSlug() === "") return []
        return currentSlug()?.split("|") || []
    })

    const metrics = () => ({ stats: metricResults() } as MetricsObject)
    const [loadingMetrics, setLoadingMetrics] = createSignal(false)

    function addMetric(data: Array<MatchResult>) {
        setMetrics([
            ...data,
            ...metricResults()
        ])
    }

    function getSlugEvents() {
        let slugList = currentSlug()?.split("|") || []
        let predicate = (e) => slugList.includes(e.slug)
        let _events = eventManifest.filter(predicate)
        return _events
    }

    function updateEventList() {
        let updateSlug = false
        let _events
        if (format() !== undefined && format() !== "") {
            let predicate = (e) => e.format.slug === searchParams.format
            updateSlug = true
            _events = eventManifest.filter(predicate)
        }
        else {
            _events = getSlugEvents()
        }
        let _slug = _events.map(e => e.slug).sort().join("|")

        // set default slug
        if (updateSlug) {
            setUpdatedSlug(_slug)
            setFormat("")
        }

    }

    createEffect(() => {
        if (loadMetrics()) {
            if (!loadingMetrics()) {
                // indcate the metrics are not loaded
                setLoadMetrics(false)
                // get the eent slug
                let _events = getSlugEvents()
                // evaluate if there are any metrics to load.
                setLoadingMetrics(_events.length > 0)
                // set metrics to load counter
                setMetricsToLoad(_events.length)
                // set count of loaded metrics to 0
                setLoadedMetrics(0)
                // clearm metrics array
                setMetrics([])

                // for each event, load the associated metrics
                _events.map((e) => {
                    const eventFile = "../events/" + e.stats
                    // check if path is in array of files
                    if (eventFile in metricsFiles) {
                        // load file, returning a promise
                        metricsFiles[eventFile]().then((data) => {
                            console.log(`loaded file ${eventFile}`)
                            //increment the loaded metrics counter
                            setLoadedMetrics(1 + loadedMetrics())
                            // map the json data to Metrics Object
                            let d = (data as MetricsObject).stats.map(data => {
                                return { ...data, tornament_slug: e.slug }
                            })
                            //record the new metric
                            addMetric(d)
                            // determine if we have finished loading, if so, clear loading indicator after 200ms
                            if (metricsToLoad() === loadedMetrics()) {
                                setTimeout(() => {
                                    setLoadingMetrics(false)
                                }, 200)
                            }
                        })
                    }
                })
            }
        }
    })

    function eventSlugs() {
        if (currentSlug() === "") {
            return []
        }
        return currentSlug()?.split("|") || []
    }

    function isChecked(slug: string) {
        return eventSlugs().includes(slug)
    }

    function handleCheckboxChange(slug: string, event) {
        let slugs = searchParams.slugs?.split("|") || []
        let idx = slugs.indexOf(slug)
        if (idx >= 0) {
            slugs.splice(idx, 1)
        } else {
            slugs.push(slug)
        }

        let updatedSlug = slugs.sort().join("|")
        setUpdatedSlug(updatedSlug)
    }

    createEffect(() => {
        updateEventList()
    })

    createEffect(() => {
        setFormat(searchParams.format)
    })

    createEffect(() => {
        console.log(`current slug updated: ${currentSlug()}`)
    })

    createEffect(() => {
        currentSlug()
        setLoadMetrics(true)
    })

    createEffect(() => {
        console.log(`Update Params. current: ${currentSlug()} Slug:${updatedSlug()} format: ${format()}`)
        if (updatedSlug() !== null) {
            setSearchParams({
                slugs: updatedSlug(),
                format: format()
            })
            setUpdatedSlug(null)
        }
    })

    const [selectedMetricsReport, setSelectedMetricsReport] = createSignal(ReportType.SIMPLE_RANKING)

    function handleReportTypeChange(e: Event) {
        const value = +e.target.value
        for (var reportType of reportTypes) {
            if (value === reportType.type) {
                setSelectedMetricsReport(reportType.type)
            }
        }
    }


    return (
        <Container fluid>
            <Container class="text-center" fluid>
                <h3>Season Stats</h3>
            </Container>
            <Container>
                <Row>
                    <Col fluid></Col>
                    <Col md={6}>
                        <Accordion style={{ "margin-top": "10px", "margin-bottom": "20px" }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Event Selection
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <For each={eventManifest}>{(event, i) =>
                                            <Form.Check
                                                type="checkbox"
                                                id={event.slug}
                                                label={<span>{event.name} {event.date}</span>}
                                                checked={selectedSlugs().includes(event.slug)}
                                                onClick={[handleCheckboxChange, event.slug]}
                                            />
                                        }</For>
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={2}>
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
                                onChange={handleReportTypeChange}
                                value={selectedMetricsReport()}
                            >
                                <For each={reportTypes}>{(reportType, i) =>
                                    <option value={reportType.type}>{reportType.name}</option>
                                }</For>
                            </Form.Select>
                        </Form>

                    </Col>
                    <Col fluid></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        <Switch>
                            <Match when={eventSlugs().length === 0 && !loadingMetrics()}>
                                <Container>
                                    <Row>
                                        <Col fluid></Col>
                                        <Col>
                                            Select an event to begin.
                                        </Col>
                                        <Col fluid></Col>
                                    </Row>
                                </Container>
                            </Match>
                            <Match when={eventSlugs().length !== 0 && loadingMetrics()}>
                                <Container>
                                    <Row>
                                        <Col fluid></Col>
                                        <Col className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </Col>
                                        <Col fluid></Col>
                                    </Row>
                                </Container>
                            </Match>
                            <Match when={metrics() !== undefined && metrics().stats.length > 0}>
                                <Switch>
                                    <Match when={selectedMetricsReport() === ReportType.SIMPLE_RANKING}>
                                        <SimpleRanking
                                            event={null}
                                            metrics={metrics()}
                                            hideRoundResults={true}
                                            excludeMaskedPlayers={true}
                                        />
                                    </Match>
                                    <Match when={selectedMetricsReport() === ReportType.VICTORY_POINT_PLOT}>
                                        <VictoryPointsReport
                                            event={null}
                                            metrics={metrics()}
                                            excludeMaskedPlayers={true}
                                        />
                                    </Match>
                                    <Match when={selectedMetricsReport() === ReportType.WIN_LOSS_METRICS}>
                                        <WinLossMetrics event={null} metrics={metrics()} />
                                    </Match>
                                </Switch>
                            </Match>
                        </Switch>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
        </Container >
    );
};

export default CrossEventMetricsRoot;