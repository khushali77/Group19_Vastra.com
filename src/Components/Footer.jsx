import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../Css/Footer.css";
import axios from "axios";

function Footer(){

  const CatItem = async (name,e) =>{
    // console.log(e)
    let data_list;
    localStorage.setItem("name",name)
    console.log("Inside the request funtion:"+name);
    e.preventDefault()
    try {
         data_list = await axios.get(`http://localhost:4000/api/products/cat/${name}`, {
            method:'GET',
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
    }) 
        .then(res=>data_list = res.data)
        console.log("Data recieved:",data_list)
        localStorage.setItem("data",JSON.stringify(data_list));
        window.location.href = "/products";
    } catch (err) {
        console.log(err);
        console.log("ERROR");
        // alert(err.response.data.msg)
    }
}

    return(
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Our website aims to satisfy customer needs from home in this hard pandemic time.</p>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  {/* Categories section links */}
                  <BrowserRouter>
                  <li><Link to="/" onClick={(e)=>{CatItem("men",e)}}>Men</Link></li>
                  <li><Link to="/" onClick={(e)=>{CatItem("women",e)}}>Women</Link></li>
                  <li><Link to="/" onClick={(e)=>{CatItem("kids",e)}}>Kids</Link></li>
                  <li><Link to="/" onClick={(e)=>{CatItem("traditional",e)}}>Traditional</Link></li>
                  <li><Link to="/" onClick={(e)=>{CatItem("western",e)}}>Western</Link></li>
                  </BrowserRouter>
                </ul>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                {/* Categories quick links */}
                <BrowserRouter>
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                  <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                </BrowserRouter>
                </ul>
              </div>

            </div>
            <hr/>
          </div>
          
          <div className="container"> 
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by<Link to="#"> Vastra.com</Link>
                </p>
              </div>
    
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  {/* Links to social Media*/}
                  <BrowserRouter>
                  <li><Link className="facebook" to="#"><i><img alt="facebook" src="https://img.icons8.com/windows/24/000000/facebook-new.png"/></i></Link></li>
                  <li><Link className="twitter" to="#"><i><img alt="twitter" src="https://img.icons8.com/fluent-systems-filled/24/000000/twitter.png"/></i></Link></li>
                  <li><Link className="gmail" to="#"><i><img alt="gmail" src="https://img.icons8.com/fluent-systems-regular/24/000000/gmail.png"/></i></Link></li>
                  <li><Link className="linkedin" to="#"><i><img alt="linkedin" src="https://img.icons8.com/material-rounded/24/000000/linkedin.png"/></i></Link></li>   
                  </BrowserRouter>
                </ul>
              </div>

            </div>
          </div>
          
    </footer>
    )
}

export default Footer;