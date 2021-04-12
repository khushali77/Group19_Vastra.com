import './App.css';
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import Retailer from "./Pages/Retailer"

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
      <Container>
      <Route exact path='/retailer' component={Retailer} />
      </Container>
      <Footer/>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
