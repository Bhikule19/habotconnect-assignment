import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../assets/habot-logo.jpg";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white shadow-sm py-2">
        <Container>
          <Navbar.Brand href="#" className="max-w-14 max-h-14">
            <img src={Logo} alt="HABOT logo" className="object-cover" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="#" className="text-gray-700 hover:text-gray-900">
                Find Suppliers
              </Nav.Link>
              <NavDropdown
                title="Find Service Tags"
                id="basic-nav-dropdown"
                className="text-gray-700"
              >
                <NavDropdown.Item href="#">Tag 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Tag 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Tag 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              variant="outline-success"
              className="ml-2 "
              style={{
                fontWeight: "500",
              }}
            >
              Login / Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
