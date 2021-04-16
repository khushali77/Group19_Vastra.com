import React from 'react';
import '../Css/product_indi.css';
import {products} from "../data";
import $ from 'jquery';
import s1 from "../Assets/shoe_1.jpg";
import s2 from "../Assets/shoe_2.jpg";
import s3 from "../Assets/shoe_3.jpg";
import s4 from "../Assets/shoe_4.jpg";
import heart from "../Assets/heart.png";
import { Link } from 'react-router-dom';
function Product_indi(){
    return(
      <div className="App">
        {
        products.map(item => (
        <div className="container-fluid h-200 d-inline-block contp">
          <div className="all">
            <div className="card-wrapper">
              <div className="card">
              <div className = "product-imgs">
                  <div className = "img-display">
                      <div className = "img-showcase">
                      <img src = {s1} alt = "shoe"/>
                      <img src = {s2}  alt = "shoe1"/>
                      <img src = {s3}  alt = "shoe2"/>
                      <img src = {s4}  alt = "shoe3"/>
                    </div>       
                  </div>
                  <div className = "img-select">
                    <div className = "img-item">
                      <Link to href = "#" data-id = "1"/>
                        <img src = {s1}  alt = "shoe1"/>
                    </div>
                    <div className = "img-item">
                      <Link to = "#" data-id = "2"/>
                        <img src = {s2}  alt = "shoe2"/>
                    </div>
                    <div className = "img-item">
                      <Link to = "#" data-id = "3"/>
                        <img src = {s3}  alt = "shoe3"/>
                    </div>
                    <div className = "img-item">
                      <Link to = "#" data-id = "4"/>
                        <img src = {s4}  alt = "shoe4"/>
                    </div>
                  </div>
                </div>
                <div className = "vertical"></div>
                <div className = "product-content">
          <div className = "product-rating">
            <span>Rating - {item.rating}</span>
          </div>
          <h2 className = "product-title">{item.title}</h2>
          <Link to = "#" className = "product-link">{item.visit}</Link>
          <div className = "product-detail">
            <p>{item.prodetail}</p>
          </div>

          <div className = "product-price">
            <p className = "new-price"><span>{item.Newprice}</span></p>
            <p className = "last-price">Old Price: <span>{item.Oldprice}</span></p>  
          </div>
          <div className="contaier">
            <div className="quantity">
              <div>
                  Quantity - 
              </div>
              <input name="quantity" type="number" className="quantity__input" value="1"/>
            </div>
          </div>

          <div className = "purchase-info">
            <button type = "button" className = "btn">
               <i className = "fas fa-shopping-cart icn"></i>ADD TO CART
            </button>
            <button type = "button" className = "btn"><img src = {heart}  alt = "heart"/></button>
          </div>
        </div>
        </div>
        </div>
        <div className="wrapper">
        <div className="tabs">
          <ul className="mid">
            <li className="active">
              <span className="icon">
                <i className="far fa-envelope"></i>
              </span>
              <span className="text">Discription</span>
            </li>
            <li>
              <span className="icon">
                <i className="far fa-star"></i>
              </span>
              <span className="text">Rating</span>
            </li>
          
          </ul>
        </div>

        <div className="content">
          <div className="tab_wrap" style={{display: "block"}}>
            <div className="title"></div>
            <div className="tab_content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
          </div>
          <div className="tab_wrap" style={{display: "block"}}>
            <div className="title"></div>
            <div className="tab_content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
          </div>
        </div>
</div>           
      </div>
        </div>
        ))
      }
      </div>
    
    )
  }

export default Product_indi;
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}
var tabs = document.querySelectorAll(".tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(content_index === tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
})
$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});

window.addEventListener('resize', slideImage);



