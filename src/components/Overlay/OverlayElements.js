import styled from "styled-components";


export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(57,55, 72, 0.22);
  z-index: 1;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
  inset: 0px;
  border: none;
`
export const BagStyle = styled.div`
  max-width: 450px;
  overflow-y: scroll;
  z-index: 2;
  margin-right: 20px;
`