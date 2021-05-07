import React from "react";
import "../Css/Product.css";
import { Button, Icon } from 'semantic-ui-react';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from "axios";

const product = JSON.parse(localStorage.getItem("product"));

function Product(){

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

    return(
        <div className="prodbody">
        <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotqVSaLLN6MwLmrfQFnOW_sMRJN8k3ge3oA&usqp=CAU" alt="clothimg"></img>
            <div className="prod__info">
                <h1 className="title">{product.title}</h1>
                <h3 className="prices"><span className="rs">₹</span> {product.price}</h3>
                <h3 className="desc"><span className="desch">Description:</span> {product.des}</h3>
                <h3 className="disc"><span className="disch">Discount:</span> {product.dispercent}%</h3>
                <div className="prod__buttons">
                <Button animated='vertical' onClick={(e)=>{addtocart(product._id,e)}}>
                    <Button.Content hidden><Icon name='shop' /></Button.Content>
                    <Button.Content visible>
                        Add to Cart
                    </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={(e)=>{addtofav(product._id,e)}}>
                    <Button.Content hidden><Icon name='heart' /></Button.Content>
                    <Button.Content visible>
                        <Icon name='heart' />
                    </Button.Content>
                    </Button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Product;