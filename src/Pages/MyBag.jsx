import React from "react";
import "../Css/MyBag.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const cart = JSON.parse(localStorage.getItem("cartlist"));

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
    return( 
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src={props.data.url} alt="im"></img>
        </div>
        <div className="peritem__details">
            <p>Product : <Link to="/item">{cart[props.data].product.title}</Link></p>
            <p>Price : Rs {cart[props.data].product.price}</p>
            <p className="qty">Quantity : </p> <input className="qty__input" type="number" min="0" defaultValue={cart[props.data].quan}/><br/>
            <button type = "button" className = "butn" onClick={(e)=>{removefromcart(cart[props.data].id,e)}}><i className = "remove"></i>Remove</button>
        </div>
     </div>
     );
 }

function MyBag(props){

    var price = 0;
    var i;
    for (i = 0; i < cart.length; i++) {
        price = price + (cart[i].product.price*cart[i].quan);
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
        <h2>It's your Cart :)</h2>
            <div className="mybag__area">
                <div className="cards">
                {Object.keys(cart).map(item=>(<li key={item.id}><Item data={item}/></li>))}
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
                        <Button variant="custom" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/payment';
                            }}>
                            Proceed to Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBag;