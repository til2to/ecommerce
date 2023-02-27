import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, provider } from './firebase';
import { withRouter } from 'react-router-dom';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from 'firebase/auth';

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
  GoogleButtonA,
  GoogleIcon,
  Home,
} from "./SigninElements";

class Signin extends Component {
  static propTypes = {};
  constructor(props){
    super(props);
    this.state = {
      showLogin: true,
      password: '',
      email: '',
      loading: false,
    }
  }

  handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      this.props.history.push('/products/all')
    } 
    catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('Sign in cancelled by user');
      }
      console.error(error);
    }
    finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { email, password, loading } = this.state;
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
        handleSignin()
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
            handleSignin()
            history.push('/products/all')
          }
        })
      // else return a message
      .catch(error => alert(error.message))
    };

    return (
      <>
        {/* {showLogin === true &&  */}
        <Container>
        <FormWrap>
          {/* <Icon to={`/products/${data.categories[currentPage].name}`}>
            <Home onClick={() => handleSignin()}>
              mariD
            </Home>
          </Icon> */}
          <FormContent>
            <Form action="">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required value={email} onChange={changeEmail}/>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required value={password} onChange={changePassword}/>
              <FormButton type="submit" onClick={signIn}>Continue</FormButton>
              <GoogleContainer>
                <GoogleButtonA disabled={loading} onClick={this.handleSignInWithGoogle}>
                  Sign in with Google
                </GoogleButtonA>
                <GoogleLabel>Have an account? Sign in</GoogleLabel>
                <GoogleButtonA onClick={register}>
                  Don't have an account? Sign up
                </GoogleButtonA>
              </GoogleContainer>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      {/* } */}
      </>
    );
  }
}

// export default connect((state) => ({ login: state.loginPage }), {showLoginPage} )(Signin);
export default withRouter(connect((state) => ({ login: state.loginPage }), {showLoginPage})(Signin));
