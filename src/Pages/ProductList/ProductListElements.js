import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  margin-: 0 25px;
`
export const CategoryName = styled.div`
  font-weight: 250;
  font-size: 25px;
  margin: 9% 0 0 0;
  overflow-y: hidden;
  z-index: 1;
  position: fixed;
`
export const PaginationContainer = styled.div`
  position: relative;
  bottome: 0;
`
export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 33.33%  33.33%  33.33%;
  grid-gap: 1rem;
  grid-auto-flow: row;
  margin: 15% 0 0 0;
`