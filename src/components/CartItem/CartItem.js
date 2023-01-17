import React, { Component } from 'react'
import PropTypes from 'prop-types'
import prev from '../../images/prev.png'
import nxt from '../../images/nxt.png'
import incIcon from '../../images/plus-square.png'
import decIcon from '../../images/minus-square.png'
import { addCount, subCount } from '../../actions/cartActions'
import { connect } from 'react-redux';

import {
  Container,
  MidContainer,
  LeftContainer,
  RightContainer,
  Direction,
  Image,
  Next,
  Previous,
  PrevNext,
  Brand,
  Name,
  AttributesCont,
  AttributesItems,
  ColorContainer,
  Price,
  CartInfo,
  AttributeName,
  AddCount,
  SubCount,
  Count,
  IncreaseIcon
} from './CartItemElements'


class CartItem extends Component {
  constructor(props) {
    super(props);
    // state to hold current image if image of a product is more than one
    this.state = {
      imageIndex: 0,
    };
  }
  static propTypes = {}

  // function to handle next and previous images
  handleNext = (imgIndex, gallery) => {
    imgIndex = imgIndex + 1;
    imgIndex < gallery.length && this.setState({imageIndex: imgIndex});
    return null;
  }

  handlePrevious = (imgIndex) => {
    imgIndex = imgIndex - 1;
    imgIndex >= 0  && this.setState({imageIndex: imgIndex});
    return null;
  }

  render() {
    const { noArrows } = this.props
    const { imageIndex } = this.state

    // current product from Cart component/page
    let { name, brand, gallery, attributes, prices } = this.props.item
    let updateLocalcount = JSON.parse(window.localStorage.getItem('data'))

    /* check the attributes of the current product against the existing products 
    in the localStorage or cart to update the count of the current product */ 
    let currentCount;
    updateLocalcount.forEach((localProduct) => {
      if (isEqual(attributes, localProduct.attributes)) {
        currentCount = localProduct.count
      }
    })

    function isEqual (localProduct, currentProdut) {
      return JSON.stringify(localProduct) === JSON.stringify(currentProdut)
    }

    return (
      <Container>
        <LeftContainer>
          <CartInfo>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            <Price>
              {prices[parseInt(window.localStorage.getItem("SelectedCurrency"))].currency.symbol}
              {" "} 
              {prices[parseInt(window.localStorage.getItem("SelectedCurrency"))].amount}
            </Price>
          </CartInfo>
          {
            // A loop through the attributes of the current product to render
            attributes.map((item, index) => {
              return <>
                <AttributeName key={index}>
                  {item.name}: 
                </AttributeName>
              
                <AttributesItems key={index}>
                  {
                    item.name === 'Color' ?
                    <ColorContainer key={index} 
                    style={{ backgroundColor: item.value, border: "1px solid #1d1f22" }}
                    />
                    :
                    <AttributesCont key={index}>{item.value}</AttributesCont>
                  }
                </AttributesItems>
              </>
            })
          }
        </LeftContainer>
        
        {/* adding addCount and subCount to increase/decrease 
        the count of the current product */}
        <MidContainer>
          <AddCount onClick={() => this.props.addCount(attributes)} >
            <IncreaseIcon>
              <img src={incIcon} alt="" />
            </IncreaseIcon>
          </AddCount>

          <Count>{currentCount}</Count>
          
          <SubCount onClick={() => this.props.subCount(attributes)}>
            <img src={decIcon} alt="" />
          </SubCount>
        </MidContainer>

        <RightContainer>
          <Direction>
            <Image src={gallery[imageIndex]} alt="product image" />
            {
              !noArrows && 
              gallery.length !== 1 &&
              (
                <>
                {/* add click event to the "previous"/"next" buttons */}
                  <PrevNext direction="right" 
                  onClick={() => this.handleNext(imageIndex, gallery)}
                  >
                    <Next src={nxt} />
                  </PrevNext>

                  <PrevNext direction="left" 
                  onClick={() => this.handlePrevious(imageIndex)}
                  >
                    <Previous src={prev} />
                  </PrevNext>
                </>
              )
            }
          </Direction>
        </RightContainer>
      </Container>
    )
  }
}

// connect this component to the state for access to data and also dispatch actions
export default connect((state) => ({ currentCurrency: state.currency, cartItems: state.cart }),
  { addCount, subCount, })(CartItem)
