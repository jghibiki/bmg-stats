
import { Component, createSignal, For, Switch, Match, createMemo, createEffect } from 'solid-js';
import { Form, Container, Row, Col, Card, } from "solid-bootstrap"
import { useSearchParams } from "solid-app-router"
import { Equipment, isEquipment, isTrait, Trait } from '../../ApiEntities';
import fuzzy from 'fuzzy';
import data from "./data.json"



const CompendiumSearch: Component = () => {
    const equipment = data.equipment.map((el: any) => {
        el.type = "equipment";
        return el as Equipment;
    })
    const traits = data.traits.map((el: any) => {
        el.type = "trait";
        return el as Trait
    })
    const [query, setQuery] = createSignal<string>("")


    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const searchResults = () => {
        const q = query()
        if (q === undefined || q.length === 0) return

        const list = [
            ...equipment,
            ...traits
        ]

        const options = {
            extract: function (el: any) {
                if (el.type === "equipment") {
                    const e = (el as Equipment)
                    return e.name + " " + e.description
                }
                else if (el.type === "trait") {
                    const e = (el as Trait)
                    return e.name + " " + e.description
                }
                else {
                    return ""
                }
            }
        }


        const results = fuzzy.filter(q, list, options)
        const matches = results.slice(0, 50).map((el) => el.original)

        var seen = Array<string>()
        var distinct = Array<any>()
        for (var match of matches) {
            var hash = (match.name + match.description + match.type).replace(" ", "").toLowerCase()
            if (seen.indexOf(hash) !== -1) continue;
            distinct.push(match)
            seen.push(hash)
        }

        return distinct
    }


    return (
        <Container style={{ "margin-top": "20px" }}>
            <Row className="text-center">
                <Col>
                    <h2> Compendium Search</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control placeholder="Equipment or traits." onInput={handleQueryChange} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <div class="d-flex flex-wrap w-100" >
                <For each={searchResults()}>{(result: any, i) =>
                    <Card class="m-2" style={{ width: "300px" }}>
                        <Card.Body>
                            <Card.Title>
                                {result.name}
                            </Card.Title>
                            <Card.Subtitle>
                                {result.type}
                            </Card.Subtitle>
                            <Card.Text>
                                {result.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }</For>
            </div>
        </Container>
    );
};

export default CompendiumSearch;