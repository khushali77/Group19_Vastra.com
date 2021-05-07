import './App.css';
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyCart from "./Pages/MyCart";
import UserProfile from "./Pages/UserProfile";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import logins from "./Components/login";
import Admin from "./Pages/Admin";
import Payment from "./Pages/Payment";
import Product from "./Pages/Product";
import Empty from "./Pages/Empty";
import Common from "./Pages/Common";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {localStorage.getItem("userid")===null?<Route exact path='/' component={logins}/>:<Route exact path='/' component={Home}/>}
      <Route exact path='/fav' component={Favourites}/>
      <Route exact path='/mycart' component={MyCart}/>
      <Route exact path='/userprofile' component={UserProfile}/>
      <Route exact path='/settings' component={Settings}/>
      <Route exact path='/products'component={Products}/>
      <Route exact path='/admin'component={Admin}/>
      <Route exact path='/payment' component={Payment}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/empty' component={Empty}/>
      <Route exact path='/privacypolicy' component={Common}/>
      <Route exact path='/aboutus' component={Common}/>
      <Route exact path='/contactus' component={Common}/>
      <Route exact path='/addproduct' component={AddProduct}/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
