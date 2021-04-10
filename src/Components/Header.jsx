import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";

function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand href="">Vastra.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <NavDropdown title="User   " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="myprofile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="pastorders">Past Orders</NavDropdown.Item>
                    <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="logout">Log out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="fav">Favourites</Nav.Link>
                <Nav.Link href="mycart">My Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;