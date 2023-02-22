import React, { Component } from 'react'
import basket from '../../images/basket.png'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import PropTypes from "prop-types";

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
  CurrencySymbol,
  StyledLink,
  Child,
} from './ProductItemElements'


class ProductItem extends Component {
  static propTypes = {
    addToCart: PropTypes.func,
  };

  /* send product to cart with all of it's first key values */ 
  submitToCart = (currentProduct) => {
    let setAttributes = []
    let copied = JSON.parse(JSON.stringify(currentProduct));
    if(copied.attributes.length > 0) {
      currentProduct.attributes.forEach((property) => {
        setAttributes.push({name: property.name, value: property.items[0].value})
        copied.attributes = setAttributes;
      })
      this.props.addToCart(copied)
    }
  };

  render() {

    /* Received props from productList page,
    for the sending of a product at a time to the cart in the store */ 
    const { name, brand, gallery, id, prices, inStock, attributes} = this.props.prod;
    const currentProduct = this.props.prod;
    let price_index = JSON.parse(window.localStorage.getItem('SelectedCurrency'))

    return (
      <Container instock={inStock}>
        <StyledLink to={`/product/${id}`}>
          <Wrapper>
            <ProductImage>
              <ImageG>
                <Gallery src={gallery[0]} />
                {
                  !inStock &&
                  <Stock>OUT OF STOCK</Stock>
                }
              </ImageG>
                { 
                  /*
                  Add click event to send the current product to the cart,
                  Also introduced count property to each product for the purpose of counting equal items
                  */ 
                inStock && (attributes.length === 0 ?
                  (<Child onClick={(e)=> e.preventDefault()}>
                    <ProductSelector onClick={() => this.props.addToCart({...currentProduct, count:1})}>
                      <SelectIcon src={basket} />
                    </ProductSelector>
                  </Child>)
                  :
                  (<Child onClick={(e)=> e.preventDefault()}>
                    <ProductSelector onClick={() => this.submitToCart({...currentProduct, count:1})}>
                      <SelectIcon src={basket} />
                    </ProductSelector>
                  </Child>))
                }
            </ProductImage>
            <ProductInfo>
              <Brand>{brand}</Brand>
              <Name>{name}</Name>
              
              <PriceItems>
                <CurrencySymbol>
                  {prices[price_index].currency.symbol} {prices[price_index].amount.toFixed(2)}
                </CurrencySymbol>
              </PriceItems>
            </ProductInfo>
          </Wrapper>
        </StyledLink>
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
export default connect((state) => ({ currentCurrency: state.currency }),
 { addToCart, })(ProductItem);
 