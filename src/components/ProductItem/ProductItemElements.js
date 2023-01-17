import styled from 'styled-components'


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
  pointer-events: ${props => props.instock === false ? 'none' : {}};
  opacity: ${props => props.instock === false ? '0.55' : {}};
  flex: 1;
  max-width: 370px;
  margin-bottom: 15px;
  position: relative;
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
export const Gallery = styled.img`
  object-fit: none;
  width: 305px;
  height: 280px;
  position: relative;
`
export const ImageG = styled.div`
  position: relative;
`
export const Stock = styled.div`
  position: absolute;
  color: red;
  top: 40%;
  right: 40%;
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
  background-color: #5ECE7B;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.5s ease
`