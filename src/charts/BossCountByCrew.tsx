
import { Component, createMemo, createSignal, createEffect, For } from 'solid-js';
import { SupplementaryEventData } from '../metrics/MetricsObject';
import { SolidApexCharts } from 'solid-apexcharts';
import { Container, Row, Col } from "solid-bootstrap"

const BossCountByCrew: Component<{ metrics: SupplementaryEventData }> = (props) => {
    var statsList = createMemo(() => props.metrics.bosses)

    const [crews, setCrews] = createSignal<Array<string>>([])
    const [chartOptions, setChartOptions] = createSignal<Array<object>>([])
    const [chartSeries, setChartSeries] = createSignal<Array<object>>([])

    createEffect(() => {
        var crewAggregations = new Map<string, Map<string, number>>()

        if (statsList() === null) {
            return
        }

        for (var metric of statsList()!) {
            let crew = metric.crew.toLocaleLowerCase()
            let boss = metric.boss.toLowerCase()

            let hasCrew = crewAggregations.has(crew)
            if (hasCrew) {
                let crewMap = crewAggregations.get(crew)!
                let hasBoss = crewMap.has(boss)
                let bossCount = hasBoss ? crewMap.get(boss)! : 0
                crewMap.set(boss, bossCount + 1)
            }
            else {
                let newMap = new Map<string, number>()
                newMap.set(boss, 1)
                crewAggregations.set(crew, newMap)
            }
        }

        let crewAgg = new Array()
        let chartOptionAgg = new Array()
        let chartSeriesAgg = new Array()

        for (var el of crewAggregations) {
            let crew = el[0]
            let bosses = el[1]

            crewAgg.push(crew)

            chartOptionAgg.push({
                chart: {
                    id: "chart",
                    width: "100%",
                    background: "transparent"
                },
                theme: {
                    "mode": "dark",
                },
                colors: [
                    "#082c60",
                    "#2f3735",
                    "#564209",
                    "#81630e",
                    "#ab8412",
                    "#988d61",
                    "#8496b0",
                    "#c2cbd8",
                    "#2c6008",
                    "#1a4634",
                    "#11394a",
                    "#2b2105",
                ],
                labels: Array.from(bosses.keys()),
            })

            chartSeriesAgg.push(
                Array.from(bosses.values())
            )

        }

        setCrews(crewAgg)
        setChartOptions(chartOptionAgg)
        setChartSeries(chartSeriesAgg)

    })

    return (
        <Container fluid>

            <For each={crews()}>{(crew, i) =>
                <Row style={{ "margin-top": "30px" }}>
                    <Col md={2}></Col>
                    <Col>
                        <h3>Bosses for Crew: {crew}</h3>
                        <p>Count of bosses used by players playing this crew.</p>
                        <SolidApexCharts width="500" type="pie" options={chartOptions()[i()]} series={chartSeries()[i()]} />
                    </Col>
                    <Col md={2}></Col>
                </Row>
            }</For>
        </Container>
    )
}

export default BossCountByCrew;