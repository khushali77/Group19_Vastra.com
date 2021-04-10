import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown} from "react-bootstrap";

function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Vastra.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <NavDropdown title="User   " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Past Orders</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets">Favourites</Nav.Link>
                <Nav.Link href="#deets">My Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;