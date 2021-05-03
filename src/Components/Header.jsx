import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import "../Css/Header.css";
import axios from "axios";

function Header(){

    const getCart = async(e) =>{
        const userid = localStorage.getItem("userid");
        // let x;
        e.preventDefault();
        try {
               const x = await axios.get(`http://localhost:4000/api/userprof/mycart/${userid}`, {
               method:'GET',
               headers:{
                   "Content-type":"application/json; charset=UTF-8"
               }
       }) 
            // .then(res=>{x = res.data})
            console.log(x)
            localStorage.setItem("cartlist",JSON.stringify(x.data));
            window.location.href = "/mycart";
            // const cart = JSON.parse(localStorage.getItem("cartlist"))
            // console.log(cart)
       } catch (err) {
           console.log(err);
           console.log("ERROR");
           // alert(err.response.data.msg)
       }
    }

    return(
        <div className="header">
            {/* Navbar using Bootstrap */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand href="/" className="app__brand">Vastra.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="app__navbar__right">
                {/* Navbar Dropdown section*/}
                <NavDropdown title="User  " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="userprofile">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {localStorage.getItem("userid")===null?<NavDropdown.Item href="/">Log in</NavDropdown.Item>:<NavDropdown.Item href="/" onClick={()=>{
                            localStorage.clear()}}>Log out</NavDropdown.Item>}
                </NavDropdown>
                <Nav.Link href="fav">Favourites</Nav.Link>
                <Nav.Link href="/mycart" onClick={(e)=>getCart(e)}>My Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;