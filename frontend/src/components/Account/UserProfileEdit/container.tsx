import * as React from "react";
import UserProfileEdit from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
}

class Container extends React.Component<IContainerProps> {
  public validatePasswordBeforeProceed = (event: any, oldPassword: any) => {
    // password must be correct prior to proceed.
    return false;
  };

  public render() {
    return (
      <UserProfileEdit
        {...this.props}
        validatePasswordBeforeProceed={this.validatePasswordBeforeProceed}
      />
    );
  }
}

export default Container;
