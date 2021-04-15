import React from "react";
import { Link } from "react-router-dom";
import {prod} from "../data.js";
import "../Css/Favourites.css";

export const Item = (props) =>{
    return( 
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src={props.data.url} alt="im"></img>
        </div>
        <div className="peritem__details">
            <p>Product : <Link to="/item">{props.data.name}</Link></p>
            <p>Price : Rs {props.data.price}</p>
            <button type = "button" className = "butn"><i className = "remove"></i>Remove</button>
            <button type = "button" className = "butn add"><i className = "addtocart"></i>Add to Cart</button>
        </div>
     </div>
     );
 }


function Favourites(){
    return(
        <div className="favs">
        <h2>These are your favourites :)</h2>
            <div className="fav__area">
                <div className="cards">
                {prod.map(item=>(<li key={item.id}><Item data={item}/></li>))}
                </div>
            </div>
        </div>
    )
}

export default Favourites;