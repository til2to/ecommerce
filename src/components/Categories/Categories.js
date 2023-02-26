import React, { Component } from 'react'
import { data } from '../../Data/staticData';
import { connect } from "react-redux";
import { productsCategoryBased, } from "../../actions/productsActions";

import {
  Wrap,
  StyledLink,
  Wrapper,
} from './CategoriesElements'


class Categories extends Component {
  static propTypes = {}

  constructor(props){
    super(props)
    // Hold the current tab or category
    this.state = {
      activeIndex: JSON.parse(window.localStorage.getItem('categoryIndex')) || 0,
    }
  }

  // Handle the current category or tab
  handleActive = (activeMenu) => {
    this.setState({activeIndex: activeMenu})
    this.props.productsCategoryBased(activeMenu)
  }

  render() {
    const { activeIndex } = this.state

    // store categories
    const categoryArr = []
    data.categories.forEach((category) => {
      categoryArr.push(category.name)
    })

    return (
      <Wrap>
        {
          categoryArr.map((category, index) => {
            return (
              <StyledLink to={`/products/${category}`} key={index}>
                <Wrapper key={index} indexVal={index} stateVal={activeIndex} 
                onClick={() => this.handleActive(index)}
                > 
                  {category.toUpperCase()} 
                </Wrapper>
              </StyledLink>
            )
          })
        }
      </Wrap>
    )
  }
}

export default connect(null, { productsCategoryBased })(Categories)