import * as React from "react";
import PasswordResetView from "./presenter";

interface IProps {
  sendPasswordResetEmail: (email: string) => void;
}

const Container: React.SFC<IProps> = props => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { sendPasswordResetEmail } = props;
    const email = event.currentTarget.elements.email.value;
    sendPasswordResetEmail(email);
  };

  return <PasswordResetView {...props} handleSubmit={handleSubmit} />;
};

export default Container;
