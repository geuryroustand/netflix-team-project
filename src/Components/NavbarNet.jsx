import { right } from "@popperjs/core";
import React from "react";
import { Navbar, Nav, NavDropdown, Container,Dropdown } from "react-bootstrap";
import {Search,BellFill} from  "react-bootstrap-icons"


const NavbarNet = () => {
  return (
    <div className="position-relative mycolor">
    <Navbar bg="dark" expand="lg">
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src="./netflix.png"
            width="100"
            height="height:48px;"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
      </Navbar>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">TV shows</Nav.Link>
          <Nav.Link href="#link">movies</Nav.Link>
          <Nav.Link href="#link">recently added</Nav.Link>
          <Nav.Link href="#link">my list</Nav.Link>
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

<div className="d-flex justify-content m-1" >
  <h3 className="pl-3">TV SHOWS</h3>
    <Dropdown className="pl-3">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Genres
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<div style={{color: "rgb(117, 117, 117)"}} size= {30} className="position-absolute mystyle d-flex justify-content-between"
>
  <div className="p-3">
<Search />
</div>
<div className="p-3">
<BellFill  />
</div>
<span className="m-3">KIDS</span>
<span>
<Dropdown className="m-1">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    Genres
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</span>


</div>


    </div>

    
  )


};

export default NavbarNet;
