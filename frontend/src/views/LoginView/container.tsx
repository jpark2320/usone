import * as React from "react";
import Login from "./presenter";

class Container extends React.Component {
  public state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <Login
        {...this.props}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleFacebookLogin={this.handleFacebookLogin}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }

  handleInputChange = (event: any) => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: any) => {
    // const { usernameLogin } = this.props;
    // const { username, password } = this.state;
    event.preventDefault();
    // usernameLogin(username, password);
  };

  handleFacebookLogin = (response: any) => {
    // const { facebookLogin } = this.props;
    // facebookLogin(response.accessToken);
  };
}

export default Container;
