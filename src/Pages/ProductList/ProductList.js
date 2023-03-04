import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import { data } from "../../Data/staticData";
import PropTypes from "prop-types";

import { 
  Container, 
  CategoryName, 
  Wrap 
} from "./ProductListElements";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 8,
      categoryNumber: 0,
    };
  }

  /* Change page */
  changePage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    let currentCategory =
      JSON.parse(window.localStorage.getItem("categoryIndex")) || 0;
    let name = data.categories[currentCategory].name;

    // name = this.props.match.params.name;
    const { currentPage, productsPerPage } = this.state;
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;

    let currentData = data.categories[currentCategory].products.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <Container>
        <CategoryName>Category {name}</CategoryName>
        <Wrap>
          {currentData.map((prod, index) => (
            <ProductItem key={index} prod={prod} />
          ))}
        </Wrap>
      </Container>
    );
  }
}

ProductList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

/* Connect this component to the state */
export default connect((state) => ({ categoryProducts: state.products }))(
  ProductList
);
