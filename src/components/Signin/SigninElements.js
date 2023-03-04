import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { COLORS } from "../../constants";
// import google from './google.png' 

export const Container = styled.div`
  min-height: 692px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  margin-top: 6%;
  // background: ${COLORS.accent};
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(LinkRouter)`
  margin-top: 32px;
  color: ${COLORS.primary};
  font-family: "Righteous-Regular";
  justify-self: center !important;
  width: max-content;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const Home = styled.div`
  
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding-top: 10px;
  }
`;

export const Form = styled.form`
  background: ${COLORS.primaryDark};
  max-width: 370px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: ${COLORS.accent};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: ${COLORS.accent};
`;

export const FormInput = styled.input`
  padding: 10px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 16px
`;

export const FormButton = styled.button`
  background: ${COLORS.primary};
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  color: ${COLORS.primaryDark};
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: ${COLORS.accent};
  font-size: 14px;
`;
export const GoogleContainer = styled.div`
  background-color: ${COLORS.primaryDark};
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  border-radius: 4px;
`
export const GoogleButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
`

export const GoogleButtonA = styled.button`
  background-color: white;
  color: #757575;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const GoogleIcon = styled.img`
  height: 30px;
  position: absolute;
  right: 530px;
  top: 56.5%;
`
export const GoogleLabel = styled.span`
  border: none;
  border-radius: 4px;
  text-align: center;
  margin: 10px 0;
  color: ${COLORS.accent};
`