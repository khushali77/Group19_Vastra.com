import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const registerSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:4000/api/signup', {name,email,password})

        localStorage.setItem('firstLogin', true)

        console.log("Data Recieved")
        window.location.href = "/";
    } catch (err) {
        alert(err.response)
        console.log("Error")
    }
}

  return (
    <BoxContainer>
      <FormContainer onSubmit={registerSubmit}>
      <MutedLink >
          Username{" "}
          </MutedLink>
        <Input type="text" placeholder="Full Name" value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <MutedLink >
          Enter email id:{" "}
          </MutedLink>
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        <MutedLink >
          Set password{" "}
          </MutedLink>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }} />
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}