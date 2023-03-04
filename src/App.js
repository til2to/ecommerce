import React, { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Signin/firebase";
import { withRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import { data } from "./Data/staticData";
import Signin from "./components/Signin/Signin";
import spinner_1 from "./assets/spinner_1.gif";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

class App extends Component {
  constructor(props) {
    super(props);
    /* state to hold to get and hold the currencies from local storage */
    this.state = {
      currency: window.localStorage.getItem("Currency") || [],
      selectedCurrency: window.localStorage.getItem("SelectedCurrency"),
      isAuthenticated: false,
      isLoading: true,
      currentUser: '' 
    };
  }

  async componentDidMount() {
    const { selectedCurrency } = this.state;
    // Set up auth state change listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        this.setState({ 
          isAuthenticated: true, 
          isLoading: false , 
          currentUser: user
        });
      } else {
        // User is signed out
        this.setState({ isAuthenticated: false, isLoading: false });
        return this.props.history.push("/signin");
      }
    });
    if (selectedCurrency === null)
      window.localStorage.setItem("SelectedCurrency", 0);
  }

  // function to store the currencies from the api to the local storage
  async setCurrency(prices) {
    window.localStorage.setItem("Currency", JSON.stringify(prices));
  }

  render() {
    const { isAuthenticated, isLoading, currentUser } = this.state;
    this.setCurrency(data.categories[1].products[0]?.prices);

    if (isLoading) {
      document.body.classList.add("loading");
      return (
        <div className="app-spin">
          <img src={spinner_1} alt="loading" />
        </div>
      );
    } else {
      document.body.classList.remove("loading");
    }

    return (
      <Provider store={store}>
        <Router>
          {isAuthenticated && <Navbar currentUser={currentUser}/>}
          <div className="app">
            <Switch>
              {!isAuthenticated && <Route path="/" component={Signin} />}
              {isAuthenticated && <Route exact path="/cart" component={Cart} />}
              {isAuthenticated && (
                <Route path="/products/:name/" component={ProductList} />
              )}
              {isAuthenticated && (
                <Route path="/product/:id/" component={ProductDetail} />
              )}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

// export default App;
export default withRouter(
  connect((state) => ({ login: state.loginPage }), null)(App)
);
