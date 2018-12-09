import * as React from "react";
import AccountUserPreferences from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
}

class Container extends React.Component<IContainerProps> {
  public render() {
    return <AccountUserPreferences {...this.props} />;
  }
}

export default Container;