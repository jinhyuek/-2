import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Heading() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/upload"
                style={{ color: "white", textDecoration: "none" }}
              >
                upload
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                list
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
