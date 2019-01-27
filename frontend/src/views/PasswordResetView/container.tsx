import * as React from "react";
import PasswordResetView from "./presenter";

interface IProps {
  createAccount: (
    username: string,
    password1: string,
    password2: string
  ) => void;
}

const Container: React.SFC<IProps> = props => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { createAccount } = props;
    const username = event.currentTarget.elements.username.value;
    const password1 = event.currentTarget.elements.password1.value;
    const password2 = event.currentTarget.elements.password2.value;
    createAccount(username, password1, password2);
  };

  return <PasswordResetView {...props} handleSubmit={handleSubmit} />;
};

export default Container;
