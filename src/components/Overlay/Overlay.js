import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyBag from '../MyBag/MyBag'

import {
  Wrapper,
  BagStyle
} from './OverlayElements'


class Overlay extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    /* State to check and hide the overlay on click of any area */ 
    this.state={
      visible: true,
    } 
  }

  render() {
    /* Received props from navbar to hide modal on clicked of any area */ 
    const { hideOverlay } = this.props

    return (
      <>
        {this.state.visible && 
          <Wrapper onClick={hideOverlay}>
            <BagStyle onClick={(e)=> e.stopPropagation()}>
              <MyBag hideOverlay={hideOverlay} />
            </BagStyle>
          </Wrapper>
        }
      </>
    )
  }
}

export default Overlay
