import React from "react";
import {prod} from "../data.js";
import "../Css/MyBag.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export const Item = (props) =>{
    return( 
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src={props.data.url} alt="im"></img>
        </div>
        <div className="peritem__details">
            <p>Product : <Link to="/item">{props.data.name}</Link></p>
            <p>Price : Rs {props.data.price}</p>
            <p className="qty">Quantity : </p> <input className="qty__input" type="number" min="0"/><br/>
            <button type = "button" className = "butn"><i className = "remove"></i>Remove</button>
        </div>
     </div>
     );
 }

function MyBag(props){
    return(
        <div className="mybag">
        <h2>It's your Cart :)</h2>
            <div className="mybag__area">
                <div className="cards">
                {prod.map(item=>(<li key={item.id}><Item data={item}/></li>))}
                </div>
                <div className="cart__details">
                    <h2>Details</h2>
                    <hr/>
                    <div className="user__details">
                        <h4 className="shipping__address">Shipping details : This is my address, why you bitch are looking here. Get lost.</h4>
                        <div className="cost__details">
                            <h3 className="subtotal">Subtotal</h3>
                            <h3 className="cost__subtotal"> ₹ 2563.52</h3>
                            <h3 className="cgst">CGST</h3>
                            <h3 className="cost__cgst"> ₹ 200.32</h3>
                            <h3 className="sgst">SGST</h3>
                            <h3 className="cost__sgst">₹ 210.50</h3>
                            <h3 className="shippingcharges">Shipping Charges</h3>
                            <h3 className="cost__ship">₹ 150.00</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="total__sect">
                        <h3 className="total">Total</h3>
                        <h3 className="cost__total">₹ 3506.00</h3>
                    </div>
                    <div className="checkout__btn">
                        <Button variant="custom" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/pay';
                            }}>
                            Proceed to Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBag;