import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import basket from '../../images/basket.png'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { productPage } from "../../actions/productsActions";

import {
  Container,
  Wrapper,
  ProductImage,
  ProductInfo,
  ProductSelector,
  ImageG,
  Gallery,
  Stock,
  SelectIcon,
  Brand,
  Name,
  PriceItems,
  CurrencySymbol
} from './ProductItemElements'


class ProductItem extends Component {
  static propTypes = {}

  render() {
    /* Received props from productList page,
    for the sending of a product at a time to the cart in the store */ 
    const { name, brand, gallery, id, prices, inStock, attributes, description} = this.props.prod;
    let currentProduct = this.props.prod;
    
    const productToRedux = () => {
      // window.localStorage.setItem('currentProduct', JSON.stringify(currentProduct));
      this.props.productPage(currentProduct)
    }

    let price_index = JSON.parse(window.localStorage.getItem('SelectedCurrency'))
 
    return (
      /* Add props to container to disable out of stock items */
      <Container instock={inStock}>
          <Wrapper>
            <ProductImage>
              <ImageG>
                <Gallery src={gallery[0]} />
                {
                  !inStock &&
                  <Stock>OUT OF STOCK</Stock>
                }
              </ImageG>
              {/* Dynamically add the id of each product to it's url  */}
              <Link to={`/product/${id}`}> 
                { 
                  /*
                  Add click event to send the current product to the cart,
                  Also introduced count property to each product for the purpose of counting equal items
                  */ 
                  attributes.length === 0 ?
                  (<ProductSelector onClick={() => this.props.addToCart({...currentProduct, count: 1})}>
                    <SelectIcon src={basket} />
                  </ProductSelector>)
                  :
                  (<ProductSelector onClick={() => productToRedux()}>
                    <SelectIcon src={basket} />
                  </ProductSelector>)
                }
              </Link>
            </ProductImage>
            <ProductInfo>
              <Brand>{brand}</Brand>
              <Name>{name}</Name>
              
              <PriceItems>
                <CurrencySymbol>
                  {prices[price_index].currency.symbol} {prices[price_index].amount}
                </CurrencySymbol>
              </PriceItems>
            </ProductInfo>
        </Wrapper>
      </Container>
    )
  }
}

ProductItem.propTypes = {
  prod: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string.isRequired,
    gallery: PropTypes.array,
    id: PropTypes.string,
    prices: PropTypes.array,
    attributes: PropTypes.array,
    inStock: PropTypes.bool,
  }),
}

/* connect this component to the state for access to data and also dispatch actions */ 
export default connect((state) => ({ currentCurrency: state.currency , 
  products: state.products}), { addToCart, productPage })(ProductItem)
