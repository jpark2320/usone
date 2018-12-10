import * as React from "react";
import AccountUserProfileEdit from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface IContainerProps {
  theme: Theme;
  container: Element;
  changeToEditView: any;
}

interface IContainerState {
  doesNotHavePassword: boolean;
  value: string;
  dispaySuccessNotice: boolean;
}

class Container extends React.Component<IContainerProps, IContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      doesNotHavePassword: true,
      value: "",
      dispaySuccessNotice: false
    };
  }

  public checkPasswordFunc = () => {
    if (this.state.value === "") {
      this.setState({ doesNotHavePassword: true });
    } else {
      this.setState({ dispaySuccessNotice: true });
    }
  };

  public currentPasswordChanges = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };
  public successMessageClose = () => {
    this.setState({ dispaySuccessNotice: false });
  };

  public validatePasswordBeforeProceed = (event: any, oldPassword: any) => {
    // password must be correct prior to proceed.
    return false;
  };

  public render() {
    return (
      <AccountUserProfileEdit
        {...this.state}
        successMessageClose={this.successMessageClose}
        checkPasswordFunc={this.checkPasswordFunc}
        currentPasswordChanges={this.currentPasswordChanges}
        changeToEditView={this.props.changeToEditView}
      />
    );
  }
}

export default Container;
