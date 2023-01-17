import styled from 'styled-components'


export const Container = styled.div`
  padding: 10px;
  margin-: 0 25px;
`
export const CategoryName = styled.div`
  font-weight: 250;
  font-size: 25px;
  margin: 3% 0 5% 1%;
  overflow-y: hidden;
  z-index: 1;
`
export const PaginationContainer = styled.div`
  position: relative;
  bottome: 0;
`
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${PaginationContainer} {
    flex-basis: 100%;
    position: fixed;
    top: 13%;
    right: 10%;
  };
  margin: 40px 0;
`