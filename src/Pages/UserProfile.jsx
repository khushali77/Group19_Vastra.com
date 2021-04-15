import React from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "../Components/accountBox/common";
import { Marginer } from "../Components/marginer";
import "../Css/UserProfile.css"
function UserProfile(){
    return(
        <BoxContainer>
      <FormContainer>
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
          e-mail address{" "}
          </MutedLink>
        <Input type="password" placeholder="Change email address/enter original" />
        <MutedLink >
          Password{" "}
          </MutedLink>
        <Input type="password" placeholder="Change password/enter original" />
      </FormContainer>
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Save</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an account?{" "}
        <BoldLink href="#">
          Register
        </BoldLink>
      </MutedLink>
        <BoldLink href="#" >
          Continue as retailer.
        </BoldLink>
    </BoxContainer>
    )
}

export default UserProfile;

  
  
