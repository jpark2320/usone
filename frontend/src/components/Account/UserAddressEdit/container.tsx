import * as React from "react";
import UserAddressEdit from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
}

class Container extends React.Component<IContainerProps> {
  public render() {
    return <UserAddressEdit {...this.props} />;
  }
}

export default Container;
