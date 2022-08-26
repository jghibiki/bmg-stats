import { Component, createSignal, For, Switch, Match, createMemo, createEffect } from 'solid-js';
import { Form, Container, Row, Col, } from "solid-bootstrap"


const SeasonalCriminalTool: Component = () => {
    const [playerVps, setPlayerVps] = createSignal(0)
    const [opponentVps, setOpponentVps] = createSignal(0)

    const playerVpsChange = (event) => {
        setPlayerVps(+event.target.value)
    }

    const opponentVpsChange = (event) => {
        setOpponentVps(+event.target.value)
    }

    const modulus = () => {
        let total = playerVps() + opponentVps()
        let loops = Math.floor(total / 12)
        let position = loops % 4

        if (position === 0) {
            return "+4 Movement"
        }
        else if (position === 1) {
            return "+2 Attack"
        }
        else if (position === 2) {
            return "+2 Defense"
        }
        else if (position === 3) {
            return "Gains Handyman"
        }

    }


    return (
        <Container style={{"margin-top": "20px"}}>
            <Row>
                <Col>
                    <Form>
                        <Form.Label>Player Victory Points</Form.Label>
                        <Form.Control type="number" onChange={playerVpsChange} value={playerVps()} min={0} />
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Label>Opponent Victory Points</Form.Label>
                        <Form.Control type="number" onChange={opponentVpsChange} value={opponentVps()} min={0} />
                    </Form>
                </Col>
            </Row>
            <Row style={{ "margin-top": "20px" }}>
                <Col className="text-center">
                    <h2>
                        {modulus()}
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default SeasonalCriminalTool;