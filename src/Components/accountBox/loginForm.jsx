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

//login pages for user
//returns the final page for the user login , the form and submit etc using the css properties decided in common and index jsx




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
        if(r.error!=null){alert("User doesn't exist, \nRegister yourself first:)")}
        else {
          console.log(r);
          console.log(r.token);
          localStorage.setItem("token",r.token);
          localStorage.setItem("userid",r.user._id);
          window.location.href = "/";
        }        
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