import React,{useState} from "react";
import "../Css/Products.css";
import {Card} from "react-bootstrap";
import axios from "axios";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Button, Icon } from 'semantic-ui-react';

toast.configure() 
function DisplayCard(props){

    const addtocart = async (itemid,e) => {
        const userid = localStorage.getItem("userid")
        console.log(userid," -> ",itemid);
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/api/userprof/addtocart/${userid}/${itemid}`) 
            .then(res=>console.log(res.data))
            toast.dark('Your Product has been added to the Cart!',{position: toast.POSITION.BOTTOM_LEFT,autoClose:3000})
        } catch (err) {
            console.log(err);
            console.log("ERROR");
        }
    }

    const addtofav = async (itemid,e) => {
        const userid = localStorage.getItem("userid")
        console.log(userid," -> ",itemid);
        let r;
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/api/addtofav/${userid}/${itemid}`) 
            .then(res=>{console.log(res.data);
            r = res.data});
            if(r.message){
                toast.dark('ALREADY in favourites!',{position: toast.POSITION.BOTTOM_LEFT,autoClose:3000})
            }
            else{toast.dark('Your Product has been added to Favourites!',{position: toast.POSITION.BOTTOM_LEFT,autoClose:3000})}
        } catch (err) {
            console.log(err);
            console.log("ERROR");
        }
    }

    const getData = async (itemid,e) => {
        const userid = localStorage.getItem("userid")
        console.log(userid," -> ",itemid);
        let x;
        e.preventDefault()
        try {
            await axios.get(`http://localhost:4000/api/products/${itemid}`) 
            .then(res=>{
                x = res.data;
                console.log(res.data)});
            localStorage.setItem("product",JSON.stringify(x));
    
            window.location.href="/product";
        } catch (err) {
            console.log(err);
            console.log("ERROR");
        }
    }

    return(
        <div className="per__card">
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotqVSaLLN6MwLmrfQFnOW_sMRJN8k3ge3oA&usqp=CAU" className="itemimg"/>
        <hr size="10"></hr>
            <Card.Body>
                <div className="product__details">
                    <div className="details">
                    <Card.Text className="product__price"> <span className="price">Price :</span> ₹ {props.data.price}</Card.Text>
                    {props.data.dispercent!==0?<Card.Text className="product__price"> <span className="disc">Discount :</span> {props.data.dispercent} %</Card.Text>:<Card.Text className="product__price"><span className="limit">Limited Stock!</span></Card.Text>}
                    </div>
                <div className="product__details__btn">
                    <Button animated='vertical' onClick={(e)=>{addtocart(props.data._id,e)}}>
                    <Button.Content hidden><Icon name='shop' /></Button.Content>
                    <Button.Content visible>
                        <Icon name='shop' />
                    </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={(e)=>{addtofav(props.data._id,e)}}>
                    <Button.Content hidden><Icon name='heart' /></Button.Content>
                    <Button.Content visible>
                        <Icon name='heart' />
                    </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={(e)=>{getData(props.data._id,e)}}>
                    <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                    <Button.Content visible>
                        <Icon name='arrow right' />
                    </Button.Content>
                    </Button>
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

    return(
        <div className="products__page">
        {/* Top bar */}
        <div className="top__bar">
            <p></p>
            <p>{name} Products</p>
            <p></p>
        </div>
        <div className="product__cards">
            {dataList?dataList.map(item=>(<li key={item._id}><DisplayCard data={item}/></li>)):null}
        </div>
        </div>
    );
}

export default Products;