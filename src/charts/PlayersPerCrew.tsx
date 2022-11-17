import { Component, createMemo, createSignal, createEffect } from 'solid-js';
import { MatchResult } from '../metrics/MetricsObject';
import { SolidApexCharts } from 'solid-apexcharts';
import { Container, Row, Col } from "solid-bootstrap"

const PlayersPerCrew: Component<{ metrics: Array<MatchResult> }> = (props) => {
    var statsList = createMemo(() => props.metrics)

    const [chartOptions, setChartOptions] = createSignal()
    const [chartSeries, setChartSeries] = createSignal()

    createEffect(() => {

        var crewCount = new Map<string, number>()
        var seenPlayers = new Set<string>()

        for (var metric of statsList()) {
            let crew = metric.crew
            let player = metric.player

            if (seenPlayers.has(player)) {
                continue;
            }
            seenPlayers.add(player)

            crewCount.set(
                crew,
                1 + (crewCount.has(crew) ? crewCount.get(crew)! : 0)
            )
        }


        var sorted = Array.from(crewCount.keys()).map(e => {
            return [e, crewCount.get(e)]
        }).sort((a, b) => b[1] - a[1])

        setChartOptions({
            chart: {
                id: "chart",
                width: "100%"
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
            labels: Array.from(sorted.map(e => e[0])),
        })

        setChartSeries(
            Array.from(sorted.map(e => e[1]))
        )

    })


    return (
        <Container style={{ "padding-left": "0px", "padding-right": "0px" }} fluid>
            <Row>
                <Col md={2}></Col>
                <Col >
                    <h3>Players per Crew</h3>
                    <p>Percent of players who played each crew. Hover for count of players.</p>
                    <SolidApexCharts width="500" type="pie" options={chartOptions()} series={chartSeries()} />
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default PlayersPerCrew;