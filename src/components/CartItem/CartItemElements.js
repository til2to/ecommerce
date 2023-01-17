import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  border-top: 0.5px solid #e5e5e5;
`
export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const MidContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`
export const RightContainer = styled.div`
  flex: 1
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Direction = styled.div`
  position: relative;
`
export const Image = styled.img`
  width: 230px;
  height: 200px; 
  object-fit: contain;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`
export const Next = styled.img`
`
export const Previous = styled.img`
`
export const PrevNext = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 30px;
  left: ${props => props.direction === "right" ? "9em" : "7.5em"}
`
export const Brand = styled.span`
  font-weight: 350;
  font-size: 21px;
  margin-bottom: 5px;
  font-family: 'Raleway', sans-serif;
`
export const Name = styled.span`
  display: flex;
  font-family: 'Raleway', sans-serif;
  align-items: center;
  font-weight: 220;
  font-size: 21px;
  font-style: normal;
  color: #1D1F22;
`
export const AttributesCont = styled.div`
  font-family: 'Source Sans Pro';
  min-width: 38px;
  min-height: 33px; 
  border: 1px solid #1D1F22;
  display: flex;
  justify-content: center;
  padding: 7px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: '#1D1F22';
`
export const AttributesItems = styled.div`
  display: flex;
`
export const ColorContainer = styled.div`
  min-width: 38px;
  min-height: 25px; 
  border: 1px solid #1d1f22;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 10px;
`
export const Price = styled.span`
  font-weight: 350;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: 'Raleway', sans-serif;
`
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  Margin-top: 10px;
  Margin-bottom: 10px;
  justify-content: space-between;
`
export const AttributeName = styled.div`
  font-family: 'Raleway', sans-serif;
`
export const DecreaseIcon = styled.img`
  width: 15px;
  height: 1px;
  justify-content: center;
  align-items: center;
`
export const AddCount = styled.div`
  width: 25px;
  height: 25px; 
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 6px;
  box-sizing: border-box;
  margin: 3px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`
export const SubCount = styled.div`
  width: 25px;
  height: 25px; 
  border: 1px solid #e5e5e5;
  display: flex;
  padding: 6px;
  box-sizing: border-box;
  margin: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Count = styled.div`
  display: flex;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`
export const IncreaseIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  `
export const VerticalIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 7.5px;
  top: -8.5px;
`