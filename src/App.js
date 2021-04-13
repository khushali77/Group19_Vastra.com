import './App.css';
import Header from "./Components/Header";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import MyBag from "./Pages/MyBag";
import UserProfile from "./Pages/UserProfile";
import Settings from "./Pages/Settings";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { AccountBox } from "./Components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function logins() {
  return (
    
    <AppContainer>
           <AccountBox />
    </AppContainer>
  );
}

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
      <Route exact path='/userlogin' component={logins}/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
