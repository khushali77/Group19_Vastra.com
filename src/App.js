import './App.css';
import './Css/product_indi.css'
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import Product_indi from "./Pages/product_indi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/fav' component={Favourites}/>
      <Route exact path='/mybag' component={MyBag}/>
      <Route exact path='/userprofile' component={UserProfile}/>
      <Route exact path='/settings' component={Settings}/>
      <Route exact path='/products'component={Products}/>
      <Route exact path='/productindi'component={Product_indi}/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
