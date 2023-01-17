import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
`
export const PageWrap = styled.div`
  min-width: 25px;
  min-height: 20px;
  margin: 2px;
  font-size: 20px;
  border-bottom: ${props => props.indexVal == props.stateVal ? 
    '3px solid #5ece7b' : {}
  }
`
export const PageNumber = styled.a`
  color: #1d1f22;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  text-decoration: none;
  font-weight: bold;
`
export const PageTitle = styled.div`
  font-size: 15px
`