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

//signup pages for retailer ir admin
//returns the final page for the admin or retailer signup, the form and submit etc using the css properties decided in common and index jsx

export function SignupForm2(props) {
  const { switchToSignin2 } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <MutedLink >
          Retail Name:{" "}
          </MutedLink>
        <Input type="text" placeholder="Retail Name" />
        <MutedLink >
          Email address{" "}
          </MutedLink>
        <Input type="email" placeholder="Email" />
        <MutedLink >
          Set Password:{" "}
          </MutedLink>
          <Input type="password" placeholder="Password" />
          <MutedLink >
          Phone number:{" "}
          </MutedLink>
           <Input type="text" placeholder="Phone number" />
           <MutedLink >
          Elaborate request(Mention what products you sell){" "}
          </MutedLink>
          <Input type="text" placeholder="Elaborate request" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Request</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
        <BoldLink href="#" onClick={switchToSignin2}>
          Back to login page
        </BoldLink>
    </BoxContainer>
  );
}