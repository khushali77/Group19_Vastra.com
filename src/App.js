import './App.css';
import './assets/product.js'
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import Product from "./Pages/product";

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
      <Route exact path='/product' component={Product}/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
