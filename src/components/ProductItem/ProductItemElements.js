import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProductSelector = styled.div`
  position: absolute;
  right: 15%;
  bottom: 0;
  width: 52px;
  height: 52px;
  opacity: 0;
`
/* props to check items out of stock and disable pointers */ 
export const Container = styled.div`
  opacity: ${props => props.instock === false ? '1' : {}};
  flex: 1;
  max-width: 370px;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  &:hover ${ProductSelector}{
    opacity: 1
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  width: 310px;
  height: 310px;
  textDecoration: 'none'
`
export const ProductImage = styled.div`
  margin-bottom: 10px;
  width: 310px;
  height: 300px;
  position: relative;
  &:hover{
    opacity: 0.8;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
export const Child = styled.div`
  text-decoration: none;
  color: #000;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`
export const Gallery = styled.img`
  object-fit: cover;
  width: 305px;
  height: 280px;
  position: relative;
`
export const ImageG = styled.div`
  position: relative;
`
export const Stock = styled.div`
  position: absolute;
  color: #8d8f9a;
  top: 40%;
  right: 25%;
  font-weight: 400;
  font-size: 24px;
  align-self: center;
`
export const ProductInfo = styled.div`
`
export const PriceItems = styled.div`
  display: flex;
  margin-top: 5px;
`
export const CurrencySymbol = styled.div`
  margin-right: 5px;
`
export const Amount = styled.div`
`
export const Brand = styled.span`
  font-size: 16px;
  font-weight: 100;
  margin-right: 5px;
`
export const Name = styled.span`
  font-weight: 100;
`
export const SelectIcon = styled.img`
  padding: 15px;
  width: 25px;
  height: 22px;
  background-color: #5ece7b;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.5s ease
`
