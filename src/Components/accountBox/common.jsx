import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 80%;
  align: center;
  margin-bottom: 2px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-left: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
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
  &:hover {
    filter: brightness(1.15);
    background: linear-gradient(
      58deg,
      rgb(134,170,171) 80%,
      rgb(156,195,200) 100%,
    );
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: #d27960;
  opacity: 80%;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  align: left;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 1);
  padding: 0px 20px;
  padding-bottom: 0px;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  margin-bottom: 0px;
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
 
  padding: 5% 20%;
  color: black;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #f6d5b6;
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