import { Link as LinkRouter} from "react-router-dom"
import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  height: 60px;
  z-index: 1;
  position: fixed;
  overflow: hidden;
  width: 100%;
`;
export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // @media screen and (max-width : 768px){
  //   display: none;
  // } 
`
export const LogOutButton = styled.button`
  background-color: #14213d;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  margin-right: auto;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
`
export const Welcome = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(316.98deg,#52d67a 16.86%,#5aee87 84.04%);
  color: #14213d; 
  font-size: 18px;
  font-weight: bold;
  text-transform: lowercase;
  padding: 8px 16px;
  margin-left: auto;

`
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: ${COLORS.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${COLORS.primaryDark};
  font-size: 16px;
  outline: none;
  border: none;
  font-family: "Nunito-SemiBold";
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    color: ${COLORS.accent};
    background: ${COLORS.primaryDark};
  }
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  position: fixed;
  z-index: 1;
  width: 100%;
`;
export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  margin: 10px;
  align-items: center;
`;
export const NavCenter = styled.div`
  flex: 1;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoHolder = styled.img`
  position: relative;
  height: 28.62px;
  width: 31.18px;
  position: relative;
  background: linear-gradient(316.98deg, #52d67a 16.86%, #5aee87 84.04%);
`;
export const NavLogo = styled.img`
  position: absolute;
  width: 14.08px;
  height: 8.99px;
  position: absolute;
`;
export const Select = styled.select`
  padding-right: 3px;
  border: none;
  font-size: 17px;
  font-weight: 500;
  font-style: 17px;
  color: #1d1f22;
  text-align: right;
`;
export const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Currency = styled.img`
  margin-right: 10px;
`;
export const CurrencyItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
export const DownArrow = styled.img`
  height: 3px;
  width: 6px;
  margin-top: 4px;
`;
export const Bag = styled.div`
  margin-right: 30px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  margin-top: 7px;
`;
export const TotalItems = styled.div`
  position: absolute;
  padding: 2px 5px;
  background: rgba(0, 0, 0, 0.73);
  border-radius: 50%;
  color: white;
  font-size: 12px;
  bottom: 10px;
  left: 10px;
`;
export const MyBag = styled.div``;

export const Symbol_Label = styled.div`
`;
export const ArrowContainer = styled.div``;