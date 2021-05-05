import React,{useState} from "react";
import "../Css/MyBag.css";
import { Link } from "react-router-dom";
import {default as Bt} from 'react-bootstrap/Button';
import axios from "axios";
import { Button, Icon } from 'semantic-ui-react'

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

    return( 
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src="data:image/jpeg;base64,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" alt="im"></img>
        </div>
        <div className="peritem__details">
            <p>Product : <Link to="/item">{cart[props.data].product.title}</Link></p>
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
        <h2>It's your Cart :)</h2>
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