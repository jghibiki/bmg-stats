import { Component, For, lazy } from 'solid-js';
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Button } from 'solid-bootstrap'
import { Router, Routes, Route, Link, hashIntegration } from "solid-app-router"
import eventManifest from './EventManifest'
const SingleEventMetricsRoot = lazy(() => import('./metrics/SingleEventMetricsRoot'))
const CrossEventMetricsRoot = lazy(() => import('./metrics/CrossEventMetricsRoot'))
const About = lazy(() => import('./About'))

var groupedEvents = new Map<string, Map<string, Array<Object>>>()

for (var event of eventManifest) {
  let formatName: string = event.format.name
  let eventSeries: string = event.event_series
  if (!groupedEvents.has(formatName)) {
    groupedEvents.set(
      formatName,
      new Map<string, Array<Object>>()
    )
  }
  let formatEvents = groupedEvents.get(formatName)
  if (!formatEvents?.has(eventSeries)) {
    formatEvents?.set(
      eventSeries,
      new Array<Object>()
    )
  }
  let seriesEvents = formatEvents?.get(eventSeries)
  seriesEvents?.push(event)
}

const App: Component = () => {

  function seriesKeys(formatName: string) {
    let keys = groupedEvents.get(formatName)?.keys()
    return Array.from(keys)
  }

  function seriesEvents(formatName: string, eventSeries: string) {
    return groupedEvents.get(formatName)?.get(eventSeries)?.sort((a, b) => a.date < b.date ? 1 : 0)
  }

  function eventLink(event: Object) {
    return (
      <NavDropdown.Item as={Link} href={"/tournament/" + event.slug} style={{ "white-space": "normal" }} >
        {event.date} - {event.name}
      </NavDropdown.Item>
    )
  }


  return (
    <Router source={hashIntegration()}>
      <Navbar expand={false} style={{ "background": "var(--bs-blue)" }} >
        <Container fluid>
          <Navbar.Brand as={Link} href="/home" class="link-light" style={{ "font-weight": "bold" }} >Batman Miniature Game Stats</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id="offcanvasnavbar"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav >
                <Nav.Link as={Link} href="/season-stats?format=renegade_350">
                  Renegade 350 Season Stats
                </Nav.Link>
                <Nav.Link as={Link} href="/season-stats">
                  Cross-Event Metrics
                </Nav.Link>
                <NavDropdown title="Tournaments" id="offcanvasNavbarDropdown">
                  <div style={{ "padding": "5px" }}>
                    <For each={Array.from(groupedEvents.keys())}>{(formatName, i) =>
                      <>
                        <b>Format: {formatName}</b>
                        <For each={seriesKeys(formatName)}>{(eventSeries, j) =>
                          <For each={seriesEvents(formatName, eventSeries)}>{(event, k) =>
                            eventLink(event)
                          }</For>
                        }</For>
                      </>
                    }</For>
                  </div>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container fluid>
        <Routes>
          <Route path="/" component={About} />
          <Route path="/home" component={About} />
          <Route path="/tournament/:slug" component={SingleEventMetricsRoot} />
          <Route path="/season-stats" component={CrossEventMetricsRoot} />
        </Routes>
      </Container>
    </Router >

  );

};

export default App;
