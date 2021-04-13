import React from "react";
import "../Css/Products.css";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {Card} from "react-bootstrap";
import {prod} from "../data";
import check from "../Assets/heart.png";

function DisplayCard(props){
    return(
        <div className="per__card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.url} className="itemimg"/>
        <hr size="10"></hr>
            <Card.Body>
                <div className="product__details">
                    <Card.Text className="product__price"> Price : Rs {props.data.price}</Card.Text>
                <div className="product__details__btn">
                    <button type = "button" className = "butn">
                    <i className = "fas fa-shopping-cart icn"></i>Add to cart</button>
                    <button type = "button" className = "butn"><img src = {check} className = "heart"  alt = "checked"/></button>
                </div>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

function Products(){
    return(
        <div className="products__page">
        {/* Top bar */}
        <div className="top__bar">
            <DropdownButton className="filter" id="dropdown-item-button" title="Filter by  " size="md" variant="light">
            <Dropdown.ItemText>Tshirts</Dropdown.ItemText>
            <Dropdown.Item as="button">Jeans</Dropdown.Item>
            <Dropdown.Item as="button">Shirts</Dropdown.Item>
            </DropdownButton>
            <p>Men's T-shirts</p>
            <DropdownButton className="sort" id="dropdown-item-button" title="Sort by  " size="md" variant="light">
            <Dropdown.ItemText>Date</Dropdown.ItemText>
            <Dropdown.Item as="button">Price:low to high</Dropdown.Item>
            <Dropdown.Item as="button">Price:high to low</Dropdown.Item>
            <Dropdown.Item as="button">size</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className="product__cards">
            {prod.map(item=>(<li><DisplayCard data={item}/></li>))}
        </div>
        </div>
    );
}

export default Products;