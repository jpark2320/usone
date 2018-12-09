import * as React from "react";
import AccountUserAddress from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
  changeToEditView:any
}

class Container extends React.Component<IContainerProps> {
  public render() {
    return <AccountUserAddress {...this.props} />;
  }
}

export default Container;
