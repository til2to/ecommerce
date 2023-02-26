import React, { Component } from "react";
import { connect } from "react-redux";

import { data } from "../../Data/staticData";
import google from "./google.png";
import { showLoginPage } from "../../actions/loginActions";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  GoogleButton,
  GoogleLabel,
  GoogleContainer,
  GoogleIcon,
  Home,
} from "./SigninElements";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
// firebase.initializeApp(firebaseConfig);

class Signin extends Component {
  static propTypes = {};
  constructor(props){
    super(props);
    this.state = {
      showLogin: true
    }
  }

  render() {
    const { showLogin } = this.state;
    

    /* use currentPage variable to navigate back to the exact previous page */
    let currentPage =
      JSON.parse(window.localStorage.getItem("categoryIndex")) || 0;

    const handleSignin = () => {
      this.props.showLoginPage(false);
    };

    return (
      <>
        {showLogin === true && 
        <Container>
        <FormWrap>
          <Icon to={`/products/${data.categories[currentPage].name}`}>
            <Home onClick={() => handleSignin()}>
              mariD
            </Home>
          </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <GoogleContainer>
                <GoogleButton>
                  {/* <GoogleIcon src={google} alt="" /> */}
                  <h2>Sign in with Google</h2>
                </GoogleButton>
                <GoogleLabel>Have an account? Sign in</GoogleLabel>
              </GoogleContainer>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>}
      </>
    );
  }
}

// export default Signin;
export default connect((state) => ({ login: state.loginPage }), {showLoginPage} )(Signin);

// export default connect(
//   (state) => ({ cartItems: state.cart, login: state.loginPage }),
//   { showLoginPage }
// )(Navbar);

