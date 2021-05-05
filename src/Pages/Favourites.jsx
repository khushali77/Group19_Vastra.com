import React from "react";
import { Link } from "react-router-dom";
import "../Css/Favourites.css";
import axios from "axios";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Button } from 'semantic-ui-react'

toast.configure() 
const favs = JSON.parse(localStorage.getItem("favlist"));

export const Item = (props) =>{

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

    const removefav = async (itemid,e) => {
        const userid = localStorage.getItem("userid")
        let x;
        console.log(userid," -> ",itemid);
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/api/removefromfav/${userid}/${itemid}`) 
            .then(res=>{
                x = res.data;
                console.log(res.data)})
            localStorage.setItem("favlist",JSON.stringify(x));
            window.location.href = "/fav";
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
     <div className="peritem" key={props.data.id}>
        <div className="peritem__img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotqVSaLLN6MwLmrfQFnOW_sMRJN8k3ge3oA&usqp=CAU" alt="im"></img>
        </div>
        <div className="peritem__details">
            {/* {console.log(props.data)} */}
            <p>Product :<Link to="/" onClick={(e)=>{getData(props.data.id,e)}}> {props.data.product.title}</Link></p>
            <p>Price : ₹ {props.data.product.price}</p>
            <Button animated='vertical' onClick={(e)=>{removefav(props.data.id,e)}}>
            <Button.Content hidden>Remove</Button.Content>
            <Button.Content visible>Remove</Button.Content>
            </Button>
            <Button animated='vertical' onClick={(e)=>{addtocart(props.data.id,e)}}>
            <Button.Content hidden>Add to Cart</Button.Content>
            <Button.Content visible>Add to Cart</Button.Content>
            </Button>
        </div>
     </div>
     );
 }


function Favourites(){

    if(favs.length===0)window.location.href='/empty';

    return(
        <div className="favs">
        <h2>These are your favourites :)</h2>
            <div className="fav__area">
                <div className="cards">
                {favs.map(item=>(<li key={item.id}><Item data={item}/></li>))}
                </div>
            </div>
        </div>
    )
}

export default Favourites;

