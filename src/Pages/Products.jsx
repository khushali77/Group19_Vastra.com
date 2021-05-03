import React,{useState} from "react";
import "../Css/Products.css";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import {Card} from "react-bootstrap";
import check from "../Assets/heart.png";
import axios from "axios";

function DisplayCard(props){

    const addtocart = async (itemid,e) => {
        const userid = localStorage.getItem("userid")
        console.log(userid," -> ",itemid);
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/api/userprof/addtocart/${userid}/${itemid}`) 
            .then(res=>console.log(res.data))
        } catch (err) {
            console.log(err);
            console.log("ERROR");
        }
    }

    return(
        <div className="per__card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.url} className="itemimg"/>
        <hr size="10"></hr>
            <Card.Body>
                <div className="product__details">
                    <Card.Text className="product__price"> Price : Rs {props.data.price}</Card.Text>
                <div className="product__details__btn">
                    <button type = "button" className = "butn"  onClick={(e)=>{addtocart(props.data._id,e)}}><i className = "fas fa-shopping-cart icn"></i>Add to cart</button>
                    <button type = "button" className = "butn"><img src = {check} className = "heart"  alt = "checked"/></button>
                </div>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

function Products(){
   
    const [dataList,setdataList] = useState(()=>JSON.parse(window.localStorage.getItem('data')));
    console.log(dataList);
    const name = window.localStorage.getItem("name");
    console.log(name);

    // useEffect(()=>{},)
    return(
        <div className="products__page">
        {/* Top bar */}
        <div className="top__bar">
            <DropdownButton className="filter" id="dropdown-item-button" title="Filter by  " size="md" variant="light">
            <Dropdown.ItemText>Tshirts</Dropdown.ItemText>
            <Dropdown.Item as="button">Jeans</Dropdown.Item>
            <Dropdown.Item as="button">Shirts</Dropdown.Item>
            </DropdownButton>
            <p>{name} Products</p>
            <DropdownButton className="sort" id="dropdown-item-button" title="Sort by  " size="md" variant="light">
            <Dropdown.ItemText>Date</Dropdown.ItemText>
            <Dropdown.Item as="button">Price:low to high</Dropdown.Item>
            <Dropdown.Item as="button">Price:high to low</Dropdown.Item>
            <Dropdown.Item as="button">size</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className="product__cards">
            {dataList?dataList.map(item=>(<li><DisplayCard data={item} key={item.id}/></li>)):null}
        </div>
        </div>
    );
}

export default Products;