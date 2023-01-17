import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Wrapper,
  SideImage,
} from './SideListElements'


export class SideList extends Component {
  static propTypes = {}

  render() {
    const {gallery, tab } = this.props;
  
    return (
      <Container>
        <Wrapper>
          {
            gallery.map((item, index) => (
              <SideImage src={item} key={index} 
              onClick={()=>tab(index)}/>
            ))
          }
        </Wrapper>
      </Container>
    )
  }
}

export default SideList
