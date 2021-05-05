import React,{useState} from "react";
import "../Css/MyCart.css";
import { Link } from "react-router-dom";
import {default as Bt} from 'react-bootstrap/Button';
import axios from "axios";
import { Button} from 'semantic-ui-react'

let cart = JSON.parse(localStorage.getItem("cartlist"));

const removefromcart = async (itemid,e) => {
    const userid = localStorage.getItem("userid")
    let x;
    console.log(userid," -> ",itemid);
    e.preventDefault()
    try {
        await axios.post(`http://localhost:4000/api/userprof/removefromCart/${userid}/${itemid}`) 
        .then(res=>{
            x = res.data;
            console.log(res.data)})
        localStorage.setItem("cartlist",JSON.stringify(x));
        window.location.href = "/mycart";
    } catch (err) {
        console.log(err);
        console.log("ERROR");
    }
}

export const Item = (props) =>{

    const [qty,setQty] = useState(cart[props.data].quan);
    
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
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotqVSaLLN6MwLmrfQFnOW_sMRJN8k3ge3oA&usqp=CAU" alt="im"></img>
        </div>
        <div className="peritem__details">
            <p>Product : <Link to="/item" onClick={(e)=>{getData(cart[props.data].id,e)}}>{cart[props.data].product.title}</Link></p>
            <p>Price : ₹ {cart[props.data].product.price}</p>
            <p className="qty">Quantity : </p> <input className="qty__input" type="number" min="0" value={qty} defaultValue={cart[props.data].quan} onChange={(e)=>{
                console.log(e.target.value);
                setQty(e.target.value);
                console.log(localStorage.getItem("cartlist"))
                var i, index = -1;
                for(i=0;i<cart.length;i++){
                    if(cart[i].id===cart[props.data].id){
                        index = i;
                        break;
                    }
                }
                console.log(index);
                cart[index].quan = parseInt(e.target.value);
                console.log(cart);
                localStorage.setItem("cartlist",JSON.stringify(cart));
                window.location.href='/mycart';
            }}/><br/>
            <Button animated='vertical' onClick={(e)=>{removefromcart(cart[props.data].id,e)}}>
            <Button.Content hidden>Remove</Button.Content>
            <Button.Content visible>Remove</Button.Content>
            </Button>
        </div>
     </div>
     );
 }

function MyCart(props){

    const final_cart = JSON.parse(localStorage.getItem("cartlist"));
    if(final_cart.length===0)window.location.href = "/empty";
    console.log("final_cart",final_cart);
    var price = 0;
    var i;
    for (i = 0; i < final_cart.length; i++) {
        price = price + (final_cart[i].product.price*final_cart[i].quan);
    }

    console.log(price);

    let subtotal = price;
    let cgst = price*0.25;
    let sgst = price*0.3;
    let shipping = 0;

    price===0?shipping=0:shipping=150;

    let total = subtotal+cgst+sgst+shipping;

    return(
        <div className="mybag">
        <h2 class="carth">It's your Cart :)</h2>
            <div className="mybag__area">
                <div className="cards">
                {Object.keys(final_cart).map(item=>(<li key={item}><Item data={item}/></li>))}
                </div>
                <div className="cart__details">
                    <h2>Details</h2>
                    <hr/>
                    <div className="user__details">
                        <h4 className="shipping__address">Shipping details : This is my address, why you bitch are looking here. Get lost.</h4>
                        <div className="cost__details">
                            <h3 className="subtotal">Subtotal</h3>
                            <h3 className="cost__subtotal"> ₹ {subtotal}</h3>
                            <h3 className="cgst">CGST</h3>
                            <h3 className="cost__cgst"> ₹ {cgst}</h3>
                            <h3 className="sgst">SGST</h3>
                            <h3 className="cost__sgst">₹ {sgst}</h3>
                            <h3 className="shippingcharges">Shipping Charges</h3>
                            <h3 className="cost__ship">₹ {shipping}</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="total__sect">
                        <h3 className="total">Total</h3>
                        <h3 className="cost__total">₹ {total}</h3>
                        {localStorage.setItem("total",total)}
                    </div>
                    <div className="checkout__btn">
                        <Bt variant="custom" onClick={(e) => {
                            e.preventDefault();
                            if(total===0){
                                window.location.href='/empty';
                            }
                            else{
                                window.location.href='/payment';
                            }
                            }}>
                            Proceed to Checkout</Bt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart;