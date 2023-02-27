import "./App.css";
import React, { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { showLoginPage } from "././actions/loginActions";

import Navbar from "./components/Navbar/Navbar";
import Products from "./Pages/ProductList/ProductList";
import Product from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import { data } from "./Data/staticData";
import Signin from "./components/Signin/Signin";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    /* state to hold to get and hold the currencies from local storage */
    this.state = {
      currency: window.localStorage.getItem("Currency") || [],
      selectedCurrency: window.localStorage.getItem("SelectedCurrency"),
      showLogin: JSON.parse(window.localStorage.getItem('loginPage')),
    };
  }

  async componentDidMount() {
    const { selectedCurrency } = this.state;
    if (selectedCurrency === null)
      window.localStorage.setItem("SelectedCurrency", 0);
  }

  // function to store the currencies from the api to the local storage
  async setCurrency(prices) {
    window.localStorage.setItem("Currency", JSON.stringify(prices));
  }

  handleSignin = () => {
    if(this.state.showLogin === null){
      window.localStorage.setItem('loginPage', true)
      let loginPage = JSON.parse(window.localStorage.getItem('loginPage'))
      this.setState({
        showLogin: loginPage
      })
    }
  };
  
  render() {
    const { showLogin } = this.state;
    this.setCurrency(data.categories[1].products[0]?.prices);
    
    this.handleSignin();

    return (
      <Provider store={store}>
        <Router>
          {/* <Container>
            <Navbar />
          </Container> */}
          <div className="app">
            <Switch>
              {/* <Route exact path="/cart" component={Cart} />
              <Route path="/product/:id/" component={Product} />
              <Route path="/products/:name/" component={Products} /> */}
              <Route exact path="/">
                <Redirect to="/signin" />
              </Route>
              <Route exact path="/signin" component={Signin} />
              <Route exact pathe="/products/:name" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

// export default App;
export default connect((state) => ({ login: state.loginPage }), { showLoginPage })(App);

const Container = styled.div`
  padding: 10px;
  margin: 0 15 0 25px;
`;
