import './App.css';
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import Login, { LoginForm } from "../src/Components/accountBox/loginForm";
import Login2, { LoginForm2 } from "../src/Components/accountBox/loginForm2";
import Signup, { SignupForm } from "../src/Components/accountBox/signupForm";
import Signup2, { SignupForm2 } from "../src/Components/accountBox/signupForm2";

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
      <Route exact path='/userlogin' component={LoginForm}/>
      <Route exact path='/retailerlogin' component={LoginForm2}/>
      <Route exact path='/usersignup' component={SignupForm}/>
      <Route exact path='/retailersignup' component={SignupForm2}/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
