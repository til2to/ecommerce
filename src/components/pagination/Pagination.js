import React, { Component } from 'react'

import {
  Wrapper,
  PageWrap,
  PageNumber,
  PageTitle,
} from './paginationElements'


class Pagination extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activePage: 1,
      isActive: false,
    }
  }

  /* show active page number */ 
  activePageNumber = (page) => {
    this.setState({activePage: page})
  }

  render() {
    const { productsPerPage, changePage, totalProducts } = this.props
    const { activePage, isActive } = this.state;
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++) {
      pageNumbers.push(i)
    }
    
    return (
      <Wrapper>
        <PageTitle>Page</PageTitle>
        {pageNumbers.map(number => (
          <PageWrap key={number} stateVal={activePage}
          indexVal={number}
          onClick={() => this.activePageNumber(number)}
          >
            <PageNumber href="#" onClick={() => changePage(number)}>
              {number}
            </PageNumber>
          </PageWrap>
        ))}
      </Wrapper>
    )
  }
}
export default Pagination
