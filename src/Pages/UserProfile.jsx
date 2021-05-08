import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../Components/marginer";
import "../Css/UserProfile.css";
import axios from "axios";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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

    const userinfo = JSON.parse(localStorage.getItem("userinfo"));
    console.log(userinfo)

    const [name,setName] = useState(userinfo.name);
    const [address,setAddress] = useState(userinfo.address);
    const [email,setEmail] = useState(userinfo.email);
    const [password,setPassword] = useState(userinfo.password);

    const setInfo = async(e) =>{
      const userid = localStorage.getItem("userid");
      e.preventDefault();
      try {
             const x = await axios.put(`http://localhost:4000/api/userprof/${userid}`, {name,address,email,password}) 
          console.log(x.data)
          localStorage.setItem("userinfo",JSON.stringify(x.data.user));
          toast.dark('Information Saved!',{position: toast.POSITION.BOTTOM_LEFT,autoClose:3000})
          // window.location.href='/userprofile';
     } catch (err) {
         console.log(err);
         console.log("ERROR");
     }
  }

    return(
        <div class="backgroundprofile">
        <BoxLayout>
        <HeaderContainer>
              <HeaderText>Vastra.com</HeaderText>
              <SmallText>User profile</SmallText>
            </HeaderContainer>
      <FormLayout onSubmit={(e)=>{console.log(e)}}>
      <MutedLink >
          Name{" "}
          </MutedLink>
        <Input type="Username" placeholder="Full name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <MutedLink >
          Default address{" "}
          </MutedLink>
        <Input type="text" placeholder="Set delivery address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
        <MutedLink >
          E-mail address{" "}
          </MutedLink>
        <Input type="email" placeholder="Change Email address or Enter original" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <MutedLink >
          Password{" "}
          </MutedLink>
        <Input type="password" placeholder="Change password or Enter original" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </FormLayout>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={(e)=>{setInfo(e)}}>Save</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxLayout>
    </div>
    )
}

export default UserProfile;

  
  
