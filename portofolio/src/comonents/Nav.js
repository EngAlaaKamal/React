import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="# ">Portofolio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#portofolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavComponent;
