import styled from "styled-components";


export const Container = styled.div`
  margin-top: 6px;
  margin-bottom: 10px;
`
export const Wrapper = styled.div`
`
export const AttributesContainer = styled.div`
  margin-top: 0px;
  display: flex;
`
export const AttributeName = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`
export const AttTextContainer = styled.div`
  font-family: 'Source Sans Pro'; 
  margin-top: 0px;
  max-width: 65px;
  max-height: 45px; 
  border: 1px solid #A6A6A6;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  cursor: pointer;
  background: ${props => props.isActive ? '#1d1f22' : 'white'};
  color: ${props => props.isActive && 'white'};
`
export const ColorContainer = styled.div`
  margin-top: 0px;
  min-width: 40px;
  max-height: 80px; 
  box-shadow: ${props => props.isActive && '0 4px 8px 0 rgba(0,0,0,0.5);'};
  border: 1px solid #1d1f22;;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  margin: 6px;
  margin-left: 0;
  cursor: pointer;
  // background: ${props => props.color.value};
  background: ${props => props.color};
`