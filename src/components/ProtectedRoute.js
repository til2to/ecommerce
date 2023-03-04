import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    // check if the user is authorized to access the route
    const isAuthenticated = false; // replace this with your own authentication check

    if (!isAuthenticated) {
      // redirect the user to a different page
      this.setState({ redirect: true });
    }
  }

  render() {
    const { redirect } = this.state;
    const { component: Component, ...rest } = this.props;
    console.log(Component)

    if (redirect) {
      // redirect the user to a different page if they are not authorized
      return <Redirect to="/" />;
    }

    // render the component if the user is authorized
    return <Component {...rest} />;
  }
}

export default ProtectedRoute;