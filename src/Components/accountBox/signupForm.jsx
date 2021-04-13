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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <MutedLink href="#">
          Username{" "}
          </MutedLink>
        <Input type="text" placeholder="Full Name" />
        <MutedLink href="#">
          Enter email id:{" "}
          </MutedLink>
        <Input type="email" placeholder="Email" />
        <MutedLink href="#">
          Set password{" "}
          </MutedLink>
        <Input type="password" placeholder="Password" />
        <MutedLink href="#">
          Confirm password{" "}
          </MutedLink>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}