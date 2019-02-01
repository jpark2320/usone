import * as React from "react";
import PasswordResetConfirmView from "./presenter";

interface IProps {
  props: () => void;
}

const Container: React.SFC<IProps> = props => {
  return <PasswordResetConfirmView {...props} />;
};

export default Container;
