import React from "react";
import styled from "styled-components";
import { Marginer } from "../Components/marginer";
import "../Css/UserProfile.css"
import "../Css/settings.css"
const BoxLayout = styled.div`

  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: white;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  @media(max-width:767px){
    width:100%;
    margin: 0px;
    margin-top: 5%;
  }
`;
const FormLayout = styled.form`
margin-left: 20%;
margin-top: 4%;
margin-bottom: 2%;
margin-right: 30%;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 2%;
  margin-left: 8%;
`;

const Input = styled.input`
  width: 60%;
  margin-top: 2%;
  margin-left: 50%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 1);
  padding: 0px 20px;
  padding-bottom: 0px;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  margin-bottom: 20px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  background-color: #C4C4C4;
  border-radius: 15px;
  &::placeholder {
    color: white;
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(134,170,171);
  }
`;

export const SubmitButton = styled.button`
 width: 50%;
 margin-left: 25%;
  padding: 5% 20%;
  color: black;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #f6d5b6;
  margin-bottom: 20px;
  background: linear-gradient(
    58deg,
    rgb(134,170,171) 20%,
    rgb(136,175,200) 100%,
  );
  &:hover {
    filter: brightness(1.15);
    background: linear-gradient(
      58deg,
      rgb(134,170,171) 80%,
      rgb(156,195,200) 100%,
    );
  }
`;

const BoldLink = styled.a`
border-left: 35%;
  font-size: 15px;
  color: #d27960;
  opacity: 80%;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  align: right;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.text`
margin-top: 5%;
  align: center;
  font-family: 'Cedarville Cursive', cursive;
  font-size: 30px;
  color: #121212;
  margin-left: 35%;
`;

const SmallText = styled.h5`
  color: #8DAAA6;
  font-weight: 10;
  font-size: 20px;
  z-index: 100;
  margin-left: 37%;
  margin-top: 2%;
  margin-bottom: 20px;
`;
function Settings(){
    return(
        <div class="backgroundprofile">

        <BoxLayout>
        <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>Settings</SmallText>
            </HeaderContainer>
      <FormLayout>
      <MutedLink >
          Default currency:{" "}
          </MutedLink>
        <Input type="Username" placeholder="Default currency" />
        <MutedLink >
          Phone number{" "}
          </MutedLink>
        <Input type="password" placeholder="Enter Contact number" />
      </FormLayout>
      
                <ul className="general">
                  <li href="/">FAQs</li>
                  <li href="/">Contact Us</li>
                  <li href="/">Terms and Conditions</li>
                  <li href="/">Privacy policy</li>
                </ul>
    </BoxLayout>
    </div>
    )
}

export default Settings;

  
  
