import * as React from "react";
import Login from "./presenter";

class Container extends React.Component {
  public state = {
    username: "",
    password: ""
  };
  public render() {
    // const { username, password } = this.state;
    return (
      <Login
        {...this.props}
        // handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        // usernameValue={username}
        // passwordValue={password}
      />
    );
    // handleFacebookLogin={this.handleFacebookLogin} // Hold until the website is open to public
  }

  // private handleInputChange = (event: any) => {
  //   const {
  //     target: { value, name }
  //   } = event;
  //   console.log(value);
  //   this.setState({
  //     [name]: value
  //   });
  // };

  private handleSubmit = (event: any) => {
    // const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    // usernameLogin(username, password);
    console.log(event.currentTarget.elements.username.value);
    console.log(event.currentTarget.elements.password.value);
    console.log("Submitted", username, password);
  };

  // Social Login will be implemented when the website is open to public
  // private handleFacebookLogin = (response: any) => {
  //   const { facebookLogin } = this.props;
  //   facebookLogin(response.accessToken);
  // };
}

export default Container;
