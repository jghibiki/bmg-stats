import { Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap'


const About: Component = () => {
    return (
        <Container >
            <Row>
                <Col class="text-center">
                    <h1 >Batman Miniature Game Stats</h1>
                </Col>
            </Row>
            <Row style={{ "margin-bottom": "50px", "margin-top": "20px" }}>
                <Col>
                    <Container>
                        <Row>
                            <Col fluid></Col>
                            <Col xs={8}>
                                <h5>Masking:</h5>
                                <p>
                                    By default player names are masked. If you would like to volunteer your name to be unmasked, please message
                                    Hibiki#7348 in discord with your first name and last name as it appeared in the Best Coast Pairings app, and
                                    the events you wish to be unmasked in. Alternatively you may indicate that you wish to be unmasked in all
                                    past and future events.
                                </p>

                                <h5>Tournament Metrics Source:</h5>
                                <p>
                                    All tournament stats are source from Best Coast Pairings or manually entered.
                                    If you'd like to contribute tournament results contact me and we can discuss how to provide the results.
                                </p>

                                <h5>Suggestions:</h5>
                                <p>
                                    If you have any suggestions for additional reports please message Hibiki#7348 in discord.

                                </p>
                                <h6>This is my planned todo list for this site:</h6>
                                <ul>
                                    <li>
                                        Casualty Points Report
                                    </li>
                                    <li>
                                        VP to casualty points report
                                    </li>
                                    <li>
                                        TP to casualty points report
                                    </li>
                                    <li>
                                        Event overview metrics: number of players, players per crew, event counts, deployment counts
                                    </li>
                                    <li>
                                        Event Card metrics - W/D/L per event, VP's per crew for each event
                                    </li>
                                    <li>
                                        Deployment card metrics - W/D/L/ per deployment, VP's per crew for each deployment
                                    </li>
                                    <li>
                                        Deployment &amp; Event / Deployment &amp; Event &amp; Crew correlation metrics - i.e. did certain combos outperform?
                                    </li>
                                    <li>
                                        Crew List metrics
                                    </li>
                                </ul>

                                <hr />
                                <p>
                                    <b>Copyright Note:</b>
                                    <br />
                                    This project is unofficial and not endorsed by, or affiliated with Knight Models.
                                    <br />
                                    All © belongs to Knight Models. Images and trademarks used without permission.
                                    <br />
                                    The link to their website is: https://www.knightmodels.com
                                </p>
                            </Col>
                            <Col fluid></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row style={{ "margin-bottom": "50px", "margin-top": "20px" }}>
                <Col class="text-center">
                    <p>
                        Site created by Jordan Goetze.
                    </p>
                </Col>
            </Row>
        </Container>
    );

};

export default About;
