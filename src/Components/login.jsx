import styled from "styled-components";
import { AccountBox } from "../Components/accountBox";
import "../Css/logins.css";

//contains the background image and settings for the login pages
//this is deployed and results in the final version

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function logins() {
  return (
    <div className="backgroundlogin">
    <AppContainer>
           <AccountBox />
    </AppContainer>
    </div>
  );
}
export default logins;