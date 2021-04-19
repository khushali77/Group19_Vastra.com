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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const{switchToSignin2}=useContext(AccountContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  let r;
  const Login = async e =>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:4000/api/signin', {email,password})
        .then(res=>r = res.data)

        localStorage.setItem('firstLogin', true)
        if(r.error!=null){console.log("NO EXISTENCE")}
        else {
          console.log(r);
          window.location.href = "/";
        }

        console.log("Recieved")

        
    } catch (err) {
        alert(err.response)
        console.log("Error")
    }
}

  return (
    <BoxContainer>
      <FormContainer onSubmit={Login}>
      <MutedLink >
          Email{" "}
          </MutedLink>
        <Input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <MutedLink >
          Enter password{" "}
          </MutedLink>
        <Input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Login</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Register
        </BoldLink>
      </MutedLink>
        <BoldLink href="#" onClick={switchToSignin2}>
          Continue as retailer.
        </BoldLink>
    </BoxContainer>
  );
}