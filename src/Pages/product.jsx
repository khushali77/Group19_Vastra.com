import React from "react";
import {products} from "./data";
import s1 from "../assets/shoe_1.jpg"
import s2 from "../assets/shoe_2.jpg"
import s3 from "../assets/shoe_3.jpg"
import s4 from "../assets/shoe_4.jpg"
import check from "../assets/heart.png"
import "../Css/product.css";
import $ from 'jquery';
function Product(){
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
                      <img src = {s1} alt = "shoe image"/>
                      <img src = {s2}  alt = "shoe image"/>
                      <img src = {s3}  alt = "shoe image"/>
                      <img src = {s4}  alt = "shoe image"/>
                    </div>       
                  </div>
                  <div className = "img-select">
                    <div className = "img-item">
                      <a href = "#" data-id = "1">
                        <img src = {s1}  alt = "shoe image"/>
                      </a>
                    </div>
                    <div className = "img-item">
                      <a href = "#" data-id = "2">
                        <img src = {s2}  alt = "shoe image"/>
                      </a>
                    </div>
                    <div className = "img-item">
                      <a href = "#" data-id = "3">
                        <img src = {s3}  alt = "shoe image"/>
                      </a>
                    </div>
                    <div className = "img-item">
                      <a href = "#" data-id = "4">
                        <img src = {s4}  alt = "shoe image"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className = "vertical"></div>
                <div className = "product-content">
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>
          <h2 className = "product-title">{item.title}</h2>
          <a href = "#" class = "product-link">visit nike store</a>
          <div class = "product-detail">
            <p>Lorem unde repudiandae voluptas temporibus,  culpa maiores. Dicta, quod neque.
				Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            
          </div>

          <div class = "product-price">
          <p class = "new-price"><span>$249.00 (5%)</span></p>
            <p class = "last-price">Old Price: <span>$257.00</span></p>
            
          </div>
          <div class="product-color">
            
          
            <div class="color-choose">
            <div>Color -</div>
              <div class="colr">
                <input data-image="red" type="radio" id="red" name="color" value="red" checked/>
                <label for="red"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="blue" type="radio" id="blue" name="color" value="blue"/>
                <label for="blue"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="black" type="radio" id="black" name="color" value="black"/>
                <label for="black"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="yellow" type="radio" id="yellow" name="color" value="yellow"/>
                <label for="yellow"><span></span></label>
              </div>
            </div>
    
          </div>

          <div class="product-color">
            
          
            <div class="color-choose">
            <div>Size &nbsp;&nbsp;-</div>
              <div class="colr">
                <input data-image="red" type="radio" id="red" name="color" value="red" checked/>
                <label for="red"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="blue" type="radio" id="blue" name="color" value="blue"/>
                <label for="blue"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="black" type="radio" id="black" name="color" value="black"/>
                <label for="black"><span></span></label>
              </div>
              <div class="colr">
                <input data-image="yellow" type="radio" id="yellow" name="color" value="yellow"/>
                <label for="yellow"><span></span></label>
              </div>
            </div>
    
          </div>
          <div class="contaier">
  
  <div class="quantity">
    <div>
      Quantity - 
      </div>
    <a href="#" class="quantity__minus"><span>-</span></a>
    <input name="quantity" type="text" class="quantity__input" value="1"/>
    <a href="#" class="quantity__plus"><span>+</span></a>
  </div>
  
</div>

          

          <div class = "purchase-info">
            <button type = "button" class = "btn">
               <i class = "fas fa-shopping-cart icn"></i>ADD TO CART
            </button>
            <button type = "button" class = "btn"><img src = {check}  alt = "checked image"/></button>
          </div>

          <div class = "social-links">
            <p>Share : </p>
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        </div>
        </div>
        <div class="wrapper">
	<div class="tabs">
		<ul class="mid">
			<li class="active">
				<span class="icon">
					<i class="far fa-envelope"></i>
				</span>
				<span class="text">Discription</span>
			</li>
			<li>
				<span class="icon">
					<i class="far fa-star"></i>
				</span>
				<span class="text">Rating</span>
			</li>
		
		</ul>
	</div>

	<div className="content">
		<div className="tab_wrap" style={{display: "block"}}>
			<div class="title"></div>
			<div class="tab_content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
			</div>
		</div>
		<div class="tab_wrap" style={{display: "block"}}>
			<div class="title"></div>
			<div class="tab_content">
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

export default Product;

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

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
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


