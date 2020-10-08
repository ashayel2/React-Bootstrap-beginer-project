import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav,
  a,
  p {
    color: #bbb;

    &:hover {
      color: white;
      effect: none;
    }
  }
`;
function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Code Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">
                <p>Home</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">
                <p>About</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">
                <p>Contact</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
