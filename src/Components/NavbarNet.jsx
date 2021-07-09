import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarNet = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src="./netflix.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap Logo"
          />
        </Navbar.Brand>
      </Navbar>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarNet;
