import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../../components/pagination/Pagination'
import ProductItem from '../../components/ProductItem/ProductItem'
import { productsLength } from "../../actions/paginationActions";
import { data } from '../../Data/staticData';
import PropTypes from "prop-types";

import {
  Container,
  CategoryName,
  Wrap,
  PaginationContainer,
} from './ProductListElements'


class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      productsPerPage: 8,
      categoryNumber: 0,
    }
  }

  /* set total number of products to redux */ 
  setTotalProducts = (totalProducts) => {
    this.props.productsLength(totalProducts)
  }

   /* Change page */
   changePage = pageNumber => {
    this.setState({currentPage: pageNumber})
  }

  render() {
    let currentCategory = JSON.parse(window.localStorage.getItem('categoryIndex')) || 0;
    let name = data.categories[currentCategory].name;

    // name = this.props.match.params.name;
    const { currentPage, productsPerPage, } = this.state;
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;

    let currentData = data.categories[currentCategory].products.slice(
      indexOfFirstPost, indexOfLastPost
    )

    let totalProducts;
    const {categoryProducts} = this.props

    totalProducts = currentData.length;
    this.setTotalProducts(totalProducts)

    return (
      <Container >
        <CategoryName>
          Category {name}
        </CategoryName>
        <Wrap>
          {
            currentData.map((prod, index) => (
              <ProductItem key={index} prod={prod} />
            ))
          }
          <PaginationContainer>
            <Pagination productsPerPage={productsPerPage} 
            totalProducts={totalProducts} changePage={this.changePage}
            />
          </PaginationContainer>
        </Wrap>
      </Container>
    )
  }
}

ProductList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  productsLength: PropTypes.func,
}

/* Connect this component to the state */
export default connect((state)=>({ categoryProducts: state.products }), 
{ productsLength })(ProductList);
