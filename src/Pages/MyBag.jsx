import React from "react";
import {prod} from "../data.js";
import "../Css/MyBag.css";
import { Link } from "react-router-dom";

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

function MyBag(){
    return(
        <div className="mybag">
        <h2>It's your Cart :)</h2>
            <div className="mybag__area">
                <div className="cards">
                {prod.map(item=>(<li key={item.id}><Item data={item}/></li>))}
                </div>
                <div className="cart__details">
                    <p>Details</p>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default MyBag;