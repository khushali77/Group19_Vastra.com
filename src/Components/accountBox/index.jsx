import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { LoginForm2} from"./loginForm2";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import {SignupForm2} from "./signupForm2";

const BoxContainer = styled.div`
  width: 50%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 2em;
`;

const BackDrop = styled(motion.div)`
background-image: "/capsule-wardrobe.jpg";
position: fixed;
min-width: 100%;
min-height: 100%;
background-size: cover;
background-position: center;
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.text`
  align: left;
  font-family: Cedarville Cursive;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 17px;
`;

const SmallText = styled.h5`
  color: black;
  font-weight: 700;
  font-size: 30px;
  z-index: 10;
  margin-left: 35%;
  margin-top: 2%;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;


const expandingTransition = {
  type: "spring",
  duration: 2.1,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };
  const switchToSignin2 = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin2");
    }, 400);
  };
  const switchToSignup2 = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup2");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToSignin2, switchToSignup2 };

  return (
    <AccountContext.Provider value={contextValue}>
      <HeaderText>Vastr.com</HeaderText>
      <BoxContainer>
        <TopContainer>
          
          {active === "signin" && (
            <HeaderContainer>
              <SmallText>Login as user</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <SmallText>Register as customer</SmallText>
            </HeaderContainer>
          )}
          {active === "signup2" && (
            <HeaderContainer>
              <SmallText>Register as customer</SmallText>
            </HeaderContainer>
          )}
          {active === "signin2" && (
            <HeaderContainer>
              <SmallText>Register as retailer</SmallText>
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