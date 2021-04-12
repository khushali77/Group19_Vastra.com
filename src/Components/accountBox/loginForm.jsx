import React, { useContext } from "react";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const{switchToSignin2}=useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <MutedLink href="#">
          Username{" "}
          </MutedLink>
        <Input type="Username" placeholder="Username" />
        <MutedLink href="#">
          Enter password{" "}
          </MutedLink>
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
        <BoldLink href="#" onClick={switchToSignin2}>
          Continue as retailer.
        </BoldLink>
    </BoxContainer>
  );
}