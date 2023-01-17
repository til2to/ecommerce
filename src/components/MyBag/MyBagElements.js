import styled from 'styled-components'
import { Link } from 'react-router-dom';


/* Add props to handle the height when th bag is empty */ 
export const Container = styled.div`
  padding: 7px;
  height: ${props => props.quantity === 0 ? '30%' : '100%'};
  overflow-y: scroll;
  max-width: 410px;
  background-color: white;
  max-height: 550px;
  overflow-x: hidden;
`
export const Wrapper = styled.div`
  margin: 0 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Title = styled.div`
  margin-top: 15px;
  font-family: 'Raleway', sans-serif;
`
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`
export const Text = styled.div`
`
export const Amount = styled.div`
  margin-right: 30px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin: 20px 10px 10px 0px;
`
export const Button = styled.div`
  font-weight: 600;
  color: black;
  background-color: white;
  height: 40px;
  width: 160px;
  justify-content: center;
  display: flex;
  border-radius: 3px; 
  border: 1px solid black;
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin: 0 50px 10px 0;
  align-items: center; 
  position: relative;
  left: 10%; 
`
export const ButtonCheckout = styled.div`
  font-weight: 600;
  color: white;
  background-color: #5ECE7B;
  display: flex;
  height: 40px;
  width: 160px;
  justify-content: center;
  border-radius: 3px; 
  opacity: 0.85;
  font-size: 13px;
  cursor: pointer;
  margin: 0 0px 10px 50px;
  align-items: center; 
  text-decoration: none; 
  position: relative;
  right: 20%; 
`