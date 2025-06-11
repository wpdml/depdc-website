import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./Applayout.css"

const Applayout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="/" className="title">banmairoy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-nav">
            <Nav className="me-auto">
              <Nav.Link href="/aboutus" className="nav-title"> About us</Nav.Link>
              <NavDropdown title={<span className="nav-title"> Projects </span>} id="nav-drop">
                <NavDropdown.Item href="/letters" className="nav-title">Raksa letters</NavDropdown.Item>
                <NavDropdown.Item href="/activities" className="nav-title">
                  PYD activities camp
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/donate" className="nav-side">Donate</Nav.Link>
              <Nav.Link eventKey={2} href="/partners" className="nav-side">
                Our partners
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Applayout;