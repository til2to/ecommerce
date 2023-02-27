import React from 'react'
import { Switch } from 'react-router-dom';
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch as OtherSwitch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import Cart from './Cart/Cart';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductList from './ProductList/ProductList';

const Home = () => {
  return (
    <>
      <Navbar />
      <Router>
        <OtherSwitch>
          <Route exact path="/cart" component={Cart} />
          <Route path="/product/:id/" component={ProductDetail} />
          <Route path="/products/:name" component={ProductList} />
        </OtherSwitch>
      </Router>
    </>
  )
}

export default Home;

const Container = styled.div`
  padding: 10px;
  margin: 0 15 0 25px;
`;
