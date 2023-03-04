import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "firebase/auth";
import { withRouter } from "react-router-dom";

import Overlay from "../Overlay/Overlay";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import { showLoginPage } from "../../actions/loginActions";
import logo from "../../images/logo.png";
import basket_ from "../../images/basket_.png";
import logoH from "../../images/logoH.png";
import Categories from "../Categories/Categories";
import {
  Container,
  Wrapper,
  NavLeft,
  NavCenter,
  NavRight,
  LogoHolder,
  NavLogo,
  CurrencyItems,
  ArrowContainer,
  MyBag,
  Bag,
  TotalItems,
  NavBtnLink,
  LogOutButton,
  NavBtn,
  Welcome
} from "./NavbarElements";
import { auth } from "../Signin/firebase";

class Navbar extends Component {
  constructor(props) {
    super(props);
    /* State to hold the current state of the modal or overlay */
    this.state = {
      toggleOverlay: false,
    };
  }
  static propTypes = {};

  /* function to toggle the overlay or modal  */
  showOverlay = () => {
    this.setState({
      toggleOverlay: !this.state.toggleOverlay,
    });
  };

  /*function to close the overlay when other areas are clicked */
  hideOverlay = () => {
    this.setState({
      toggleOverlay: false,
    });
  };

  logOut = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      this.props.history.push("/signin");
    })
    .catch((error) => {
      // An error happened.
      console.log("unsuccessful");
    });
  };

  render() {
    // Get the quantity of items/products in cart state.
    const { cartItems: { quantity }, currentUser } = this.props;
    const { toggleOverlay } = this.state;
    return (
      <>
        <Container>
          <NavBtn>
            <LogOutButton onClick={() => this.logOut()}>
              Log Out
            </LogOutButton>
            <Welcome>welcome: {currentUser.email}</Welcome>
          </NavBtn>
          <Wrapper>
            <NavLeft>
              <Categories />
            </NavLeft>
            <NavCenter>
              <LogoHolder src={logoH} alt="" />
              <NavLogo src={logo} alt="" />
            </NavCenter>
            <NavRight>
              <CurrencyItems>
                <ArrowContainer>
                  <CurrencySelector />
                </ArrowContainer>
                {/* Add click event to toggle the modal/overlay */}
                <MyBag onClick={() => this.showOverlay()}>
                  <Bag>
                    <TotalItems>{quantity}</TotalItems>
                    <img src={basket_} alt="" />
                  </Bag>
                </MyBag>
                {/* Add click event to close the overlay when outside area is clicked */}
                {toggleOverlay && <Overlay hideOverlay={this.hideOverlay} />}
              </CurrencyItems>
            </NavRight>
          </Wrapper>
        </Container>
        {/* )} */}
      </>
    );
  }
}

Navbar.propTypes = {
  cartItems: PropTypes.shape({
    quantity: PropTypes.number,
  }),
};

/* connect this component to the state for access to data */
export default withRouter(
  connect((state) => ({ cartItems: state.cart, login: state.loginPage }), {
    showLoginPage,
  })(Navbar)
);
