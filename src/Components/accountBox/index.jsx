import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { LoginForm2} from"./loginForm2";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import {SignupForm2} from "./signupForm2";

const BoxContainer = styled.div`
margin-top: 5%;
margin-bottom: 5%;
  width: 37%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  @media(max-width:767px){
    width:100%;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 100px;
  padding-bottom: 2em;
`;


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.text`
  align: center;
  font-family: 'Cedarville Cursive', cursive;
  font-size: 30px;
  color: #121212;
  margin-left: 35%;
`;

const SmallText = styled.h5`
  color: #8DAAA6;
  font-weight: 10;
  font-size: 17px;
  z-index: 100;
  margin-left: 35%;
  margin-top: 2%;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export function AccountBox(props) {
  const [active, setActive] = useState("signin");
  const switchToSignup = () => {
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };
  const switchToSignin2 = () =>{
    setTimeout(() => {
      setActive("signin2");
    }, 400);
  };
  const switchToSignup2 = () => {
    setTimeout(() => {
      setActive("signup2");
    }, 400);
  };
 

  const contextValue = { switchToSignup, switchToSignin, switchToSignin2, switchToSignup2, };

  return (
    <AccountContext.Provider value={contextValue}>
      <HeaderText>Vastr.com</HeaderText>
      <BoxContainer>
        <TopContainer>
          
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>Login as customer</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>Register as customer</SmallText>
            </HeaderContainer>
          )}
          {active === "signup2" && (
            <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>Register as retailer</SmallText>
            </HeaderContainer>
          )}
          {active === "signin2" && (
            <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>Login as retailer</SmallText>
            </HeaderContainer>
          )}
          
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active=== 'signin2' && <LoginForm2 />}
          {active === "signup2" && <SignupForm2 />}
          
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}