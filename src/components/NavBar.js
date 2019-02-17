import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return(
            <div id="NavBar">
                <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{ color: "white" }}>JustLickIt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#HomePage" style={{ color: "#cccccc" }}>Home</Nav.Link>
                    <Nav.Link href="#Contact" style={{ color: "#cccccc" }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
};

export default NavBar;