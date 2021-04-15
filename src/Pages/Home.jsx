import React from "react";
import Carousel from "react-elastic-carousel";
import Video2 from "../Assets/Video2.mp4";
import {brands,breakPoints,prod,cat} from "../data";
import Card1 from "../Components/Card";
import "../Css/Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="app__home">
            
            <div className="app__main">
            {/* Search bar */}
            <div className="search__bar">
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
                    <Link to='/personalized'><h2>Then Let's Head Over</h2></Link>
                </div>

            </div> 
        </div>
    )  
}

export default Home;