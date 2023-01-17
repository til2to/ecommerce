import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  z-index: 1;
`
export const Wrap = styled.div`
 display: flex;  
`
// props to handle the current category or tab
export const Wrapper = styled.span`
  padding: 10px;
  max-width: 150px;
  color: #000;
  padding-bottom: 20px;
  border-bottom: ${props => props.indexVal == props.stateVal ? 
    '1px solid #5ece7b' : {}
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`