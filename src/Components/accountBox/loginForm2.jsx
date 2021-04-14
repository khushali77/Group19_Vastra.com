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

export function LoginForm2(props) {
  const { switchToSignup2 } = useContext(AccountContext);
  const { switchToSignin} = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
      <MutedLink >
          Username{" "}
          </MutedLink>
        <Input type="text" placeholder="Full Name" />
        <MutedLink>
          Enter email id:{" "}
          </MutedLink>
        <Input type="email" placeholder="Email" />
        <MutedLink >
          Set password{" "}
          </MutedLink>
        <Input type="password" placeholder="Password" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignup2}>
          Register
        </BoldLink>
      </MutedLink>
        <BoldLink href="#" onClick={switchToSignin}>
        Back to customer login.
        </BoldLink>
    </BoxContainer>
  );
}