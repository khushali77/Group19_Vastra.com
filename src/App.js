import './App.css';
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
<<<<<<< HEAD
import Retailer from "./Pages/Retailer";
import AddItem from "./Pages/AddItem";
=======
import logins from "./Components/login";
import Admin from "./Pages/Admin";
import Payment from "./Pages/Payment";
>>>>>>> 9fa037ad35340a0de5800732f202cbeed6cf413d

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/fav' component={Favourites}/>
      <Route exact path='/mycart' component={MyBag}/>
      <Route exact path='/userprofile' component={UserProfile}/>
      <Route exact path='/settings' component={Settings}/>
<<<<<<< HEAD
      <Container>
      <Route exact path='/retailer' component={Retailer} />
      </Container>
      <Container>
      <Route exact path='/additem' component={AddItem} />
      </Container>
=======
      <Route exact path='/userlogin' component={logins}/>
      <Route exact path='/products'component={Products}/>
      <Route exact path='/admin'component={Admin}/>
      <Route exact path="/payment" component={Payment}/>
>>>>>>> 9fa037ad35340a0de5800732f202cbeed6cf413d
      <Footer/>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
