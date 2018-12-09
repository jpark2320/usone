import * as React from "react";
import AccountUserAddressEdit from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

 interface IContainerProps {
  theme: Theme;
  container: Element;
  changeToEditView:any
}

interface IContainerStates {
  dispaySuccessNotice:boolean
}

class Container extends React.Component<IContainerProps,IContainerStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      dispaySuccessNotice:false
    }
  }

  public successMessageClose = () => {
    this.setState({ dispaySuccessNotice: false });
  };

  public successMessageOpen = () => {
    this.setState({ dispaySuccessNotice: true });
  };




  public render() {
    return (
    <AccountUserAddressEdit 
      {...this.state}
      successMessageClose={this.successMessageClose}
      successMessageOpen={this.successMessageOpen}
      changeToEditView={this.props.changeToEditView}
    />
    )
  }
}

export default Container;
