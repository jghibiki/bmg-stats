import { Component, For, lazy } from 'solid-js';
import { Container, Navbar, Offcanvas, Nav, NavDropdown } from 'solid-bootstrap'
import { Router, Routes, Route, Link, hashIntegration } from "solid-app-router"
import eventManifest from './EventManifest'
const MetricsRoot = lazy(() => import('./metrics/MetricsRoot'))
const About = lazy(() => import('./About'))


const App: Component = () => {
  return (
    <Router source={hashIntegration()}>
      <Navbar expand={false} bg="secondary">
        <Container fluid>
          <Navbar.Brand as={Link} href="/home" >Batman Miniature Game Stats</Navbar.Brand>
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
                <NavDropdown title="Tournaments" id="offcanvasNavbarDropdown">
                  <For each={eventManifest.sort((a, b) => a.date > b.date ? 1 : 0)}>{(event, i) =>
                    <NavDropdown.Item as={Link} href={"/tournament/" + event.slug} >
                      {event.name} - {event.date}
                    </NavDropdown.Item>
                  }</For>
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
          <Route path="/tournament/:slug" component={MetricsRoot} />
        </Routes>
      </Container>
    </Router>

  );

};

export default App;
