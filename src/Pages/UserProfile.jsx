import React from "react";
import styled from "styled-components";
import { Marginer } from "../Components/marginer";
import "../Css/UserProfile.css"

const BoxLayout = styled.div`
margin-left: 30%;
margin-top: 4%;
margin-bottom: 2%;
margin-right: 30%;
  width: 40%;
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

  width: 120%;
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
  margin-left: 10%;
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
  font-size: 17px;
  z-index: 100;
  margin-left: 37%;
  margin-top: 2%;
  margin-bottom: 20px;
`;

function UserProfile(){
    return(
        <div class="backgroundprofile">

        <BoxLayout>
        <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>User profile</SmallText>
            </HeaderContainer>
      <FormLayout>
      <MutedLink >
          Name{" "}
          </MutedLink>
        <Input type="Username" placeholder="Full name" />
        <MutedLink >
          Phone number{" "}
          </MutedLink>
        <Input type="password" placeholder="Enter Contact number" />
        <MutedLink >
          Default address{" "}
          </MutedLink>
        <Input type="password" placeholder="Set delivery address" />
        <MutedLink >
          E-mail address{" "}
          </MutedLink>
        <Input type="password" placeholder="Change Email address or Enter original" />
        <MutedLink >
          Password{" "}
          </MutedLink>
        <Input type="password" placeholder="Change password or Enter original" />
      </FormLayout>
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Save</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxLayout>
    </div>
    )
}

export default UserProfile;

  
  
