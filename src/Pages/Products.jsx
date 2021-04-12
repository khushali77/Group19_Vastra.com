import React from "react";
import "../Css/Products.css";
import {Dropdown, DropdownButton} from 'react-bootstrap'

function Products(){
    return(
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
    );
}

export default Products;