import { Component, For, lazy } from 'solid-js';
import { Container, Navbar, Offcanvas, Nav, NavDropdown } from 'solid-bootstrap'
import { Router, Routes, Route, Link, useNavigate } from "solid-app-router"
import eventManifest from './EventManifest'
const MetricsRoot = lazy(() => import('./metrics/MetricsRoot'))


const App: Component = () => {
  return (
    <Router>
      <Navbar expand={false} bg="secondary">
        <Container fluid>
          <Navbar.Brand href="#">Batman Miniature Game Stats</Navbar.Brand>
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
          <Route path="/tournament/:slug" component={MetricsRoot} />
        </Routes>
      </Container>
    </Router>

  );

};

export default App;
