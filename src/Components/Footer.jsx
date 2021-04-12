import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "../Css/Footer.css";

function Footer(){
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
                  <li><Link to="/">Men</Link></li>
                  <li><Link to="/">Women</Link></li>
                  <li><Link to="/">Kids</Link></li>
                  <li><Link to="/">Traditionals</Link></li>
                  <li><Link to="/">Western</Link></li>
                  </BrowserRouter>
                </ul>
              </div>
    
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                {/* Categories quick links */}
                <BrowserRouter>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                  <li><Link to="/">Contribute</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Sitemap</Link></li>
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