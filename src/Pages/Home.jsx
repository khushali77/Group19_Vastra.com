import React,{useState} from "react";
import Carousel from "react-elastic-carousel";
import Video2 from "../Assets/Video2.mp4";
import {brands,breakPoints,prod,cat} from "../data";
import Card1 from "../Components/Card";
import "../Css/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(){
    const [search,setSearch] = useState(undefined);

    
    let data_list;
    const SearchItem = async e =>{
        console.log(e)
        console.log("Inside the request funtion:"+search);
        e.preventDefault()
        try {
             data_list = await axios.get(`http://localhost:4000/api/products/search/${search}`, {
                method:'GET',
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
        }) 
            .then(res=>data_list = res.data)
            console.log("Data recieved:",data_list)
            // console.log(typeof(data_list[0]))
            localStorage.setItem("data",JSON.stringify(data_list));
            window.location.href = "/products";
        } catch (err) {
            console.log(err);
            console.log("ERROR");
            // alert(err.response.data.msg)
        }
    }

    return(
        <div className="app__home">
            
            <div className="app__main">
            {/* Search bar */}
            <div className="search__bar">
                <form onSubmit={SearchItem}>
                <input type="text" required placeholder="Search your item" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                <button type="submit">Search</button>
                </form>
            </div>
            {/* Video on the main page */}
            <video className="app__video" autoPlay muted loop>
                <source src={Video2} type="video/mp4"/>
            </video>
            </div>
            
            <div className="sections">
                {/* Shop by category section */}
                <div className="section__category">
                    <h2>Shop by Category</h2>
                    <div className="brand__cat">
                        <Carousel breakPoints={breakPoints}>
                        {cat.map((photo)=>{
                            return( 
                            <div>
                                <Link to='/products'><Card1 img={photo.url} name={photo.name}/></Link>
                            </div>)
                            })}
                        </Carousel>
                    </div>
                </div>

                {/* Shop by Product section */}    
                <div className="section__product">
                    <h2>Shop by Product</h2>
                    <div className="brand__prod">
                    <Carousel breakPoints={breakPoints}>
                    {prod.map((photo)=>{
                        return( 
                        <div>
                            <Link to='/products'><Card1 img={photo.url} name={photo.name}/></Link>
                        </div>)
                        })}
                    </Carousel>
                    </div>
                </div>

                {/* Shop by Brand section */}    
                <div className="section__brand">
                    <h2>Shop by Brand</h2>
                    <div className="brand__car">
                    <Carousel breakPoints={breakPoints}>
                    {brands.map((photo)=>{
                        return( 
                        <div>
                            <Link to='/products'><Card1 img={photo.url} name={photo.name}/></Link>
                        </div>)
                        })}
                    </Carousel>
                    </div>
                </div>

                <div className="app__personalize">
                    <h2>Wanna Create Your Personlized T-shirts?</h2>
                    <Link to='https://www.customily.com/tshirt-design'><h2>Then Let's Head Over</h2></Link>
                </div>

            </div> 
        </div>
    )  
}

export default Home;