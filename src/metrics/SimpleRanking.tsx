import { Component, For, createMemo, createSignal, createEffect, Show, } from 'solid-js';
import { MetricsObject, MatchResult, EventMetadata } from './MetricsObject';
import { NonNullSortDirection, SimpleTable, SortDirection, } from "solid-simple-table"
import { Container, Row, Col } from "solid-bootstrap"
import 'solid-simple-table/dist/SimpleTable.css'

const SimpleRanking: Component<{ metrics: MetricsObject, event: string }> = (props) => {

    const statsList = createMemo(() => props.metrics.stats)
    const [ranking, setRanking] = createSignal(new Array<Object>())

    function calcRanking() {
        let players = Array.from(new Set(statsList().map((e) => e.player)))
        let scores = players.map((e) => {
            let tp = 0
            let vp = 0
            for (var el of statsList()) {
                if (el.player !== e) continue
                tp += el.tp
                vp += el.vp
            }

            return { tp: tp, vp: vp, player: e }
        })
        let sortedScores = scores.sort((a, b) => b.tp - a.tp || b.vp - a.vp)

        let r = new Array<Object>()

        for (let i = 1; i <= scores.length; i++) {
            r.push({
                rank: i,
                ...sortedScores[i - 1]
            })

        }

        setRanking(r)

    }

    createEffect(() => {
        calcRanking()
    })

    calcRanking()


    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <h4>Tornament Ranking</h4>
                    <Show
                        when={!(ranking() === undefined && ranking().length === 0)}
                        fallback={"Loading results..."}
                    >
                        <SimpleTable rows={ranking()} />
                    </Show>
                </Col>
                <Col xs={4}>
                    <h4>Round Results</h4>
                    <SimpleTable rows={statsList()} />
                </Col>
            </Row>
        </Container>
    );

}

export default SimpleRanking;