import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Row
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Componentes Pc.i</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <DropdownButton variant="dark" id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUser} />
                </Row>
                <Row>#USUARIO#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />

              <Dropdown.Item href="/">Cerrar Sesión</Dropdown.Item>
              <Dropdown.Item href="/login">Iniciar Sesión</Dropdown.Item>
              
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
