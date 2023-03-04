import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, provider } from "./firebase";
import { withRouter } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// import { data } from "../../Data/staticData";
// import google from "./google.png";
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
  GoogleLabel,
  GoogleContainer,
  GoogleButtonA,
  Home,
} from "./SigninElements";

class Signin extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      password: "",
      email: "",
      loading: false,
      signInError: "",
    };
  }

  handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      this.props.history.push("/products/all");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        this.setState({ signInError: "Sign in cancelled by user" });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { email, password, loading, signInError } = this.state;
    const { history } = this.props;

    /* use currentPage variable to navigate back to the exact previous page */
    // let currentPage =
    //   JSON.parse(window.localStorage.getItem("categoryIndex")) || 0;
    const changeEmail = (e) => {
      this.setState({ email: e.target.value });
    };
    const changePassword = (e) => {
      this.setState({ password: e.target.value });
    };

    const signIn = (e) => {
      e.preventDefault();
      //   firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
          console.log(user)
          history.push("/products/all");
        })
        .catch((error) => {
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-email"
          ) {
            this.setState({ signInError: "Invalid or incorrect email or password" });
          } else {
            this.setState({ signInError: error.message });
          }
        });
    };

    const register = (e) => {
      e.preventDefault();
      // firebase authentication
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          // the auth object comes back on success
          console.log(auth);
          // if auth is not empty i.e user created so redirect user
          if (auth) {
            history.push("/products/all");
          }
        })
        // else return a message
        .catch((error) => {
          if (
            error.code === "auth/wrong-password" ||
            error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-email"
          ) {
            this.setState({ signInError: "Enter a valid email and password to sign up" });
          } else {
            this.setState({ signInError: error.message });
          }
        });
    };

    return (
      <>
        {/* products/${data.categories[currentPage].name} */}
        <Container>
          <FormWrap>
            <Icon to={`/`}>
              <Home>mariD</Home>
            </Icon>
            <FormContent>
              <Form>
                <FormH1>Sign in to your account</FormH1>
                {signInError && (
                  <p style={{ color: "#fca311", fontSize: "16px", marginBottom:'5px' }}>
                    {signInError}
                  </p>
                )}
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  type="email"
                  required
                  value={email}
                  onChange={changeEmail}
                />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput
                  type="password"
                  required
                  value={password}
                  onChange={changePassword}
                />
                <FormButton type="submit" onClick={signIn}>
                  Continue
                </FormButton>
                <GoogleContainer>
                  <GoogleButtonA
                    disabled={loading}
                    onClick={this.handleSignInWithGoogle}
                  >
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
export default withRouter(
  connect((state) => ({ login: state.loginPage }), { showLoginPage })(Signin)
);