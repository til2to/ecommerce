import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from './firebase';
import { withRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwcSm8DeCABGJ2iEawOENgUfiFdZrwFf0",
  authDomain: "ecommerce-f82d1.firebaseapp.com",
  projectId: "ecommerce-f82d1",
  storageBucket: "ecommerce-f82d1.appspot.com",
  messagingSenderId: "504509720798",
  appId: "1:504509720798:web:282753dd118438a2243a4f",
  measurementId: "G-CMHK3KTR74"
};

class Signin extends Component {
  static propTypes = {};
  constructor(props){
    super(props);
    this.state = {
      showLogin: true,
      password: '',
      email: '',
    }
  }

  render() {
    const { showLogin, email, password } = this.state;
    const { history } = this.props
    
    /* use currentPage variable to navigate back to the exact previous page */
    let currentPage =
      JSON.parse(window.localStorage.getItem("categoryIndex")) || 0;

    const handleSignin = () => {
      this.props.showLoginPage(false);
    };

    const changeEmail = (e) => {
      this.setState({email: e.target.value})
    }
    const changePassword = (e) => {
      this.setState({password: e.target.value})
    }

    const signIn = (e) =>{
      e.preventDefault(); 
      //   firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        history.push('/products/all')
      })
      .catch(error => alert(error.message))
    }

    const register = (e) => {
      e.preventDefault();
  
      // firebase authentication
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => { 
          // the auth object comes back on success
          console.log(auth);

          // if auth is not empty i.e user created so redirect user
          if (auth){
            history.push('/products/all')
            console.log('user created')
          }
        })
      // else return a message
      .catch(error => alert(error.message))
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
            <Form action="">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required value={email} onChange={changeEmail}/>
              <h1 style={{color: 'white'}}>{email}</h1>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required value={password} onChange={changePassword}/>
              <h1 style={{color: 'white'}}>{password}</h1>
              <FormButton type="submit" onClick={signIn}>Continue</FormButton>
              <GoogleContainer>
                <GoogleButton>
                  {/* <GoogleIcon src={google} alt="" /> */}
                  <h2>Sign in with Google</h2>
                </GoogleButton>
                <GoogleLabel>Have an account? Sign in</GoogleLabel>
                <GoogleButton onClick={register}>
                  {/* <GoogleIcon src={google} alt="" /> */}
                  <h2>Don't have an account? Sign up</h2>
                </GoogleButton>
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

// export default connect((state) => ({ login: state.loginPage }), {showLoginPage} )(Signin);
export default withRouter(connect((state) => ({ login: state.loginPage }), {showLoginPage})(Signin));
