import * as React from "react";
import LoginView from "./presenter";

interface IProps {
  usernameLogin: (username: string, password: string) => void;
}

const Container: React.SFC<IProps> = props => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { usernameLogin } = props;
    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;
    usernameLogin(username, password);
  };

  return <LoginView {...props} handleSubmit={handleSubmit} />;
};

export default Container;
