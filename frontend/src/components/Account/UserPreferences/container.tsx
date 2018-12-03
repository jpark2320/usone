import * as React from "react";
import UserPreferences from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
}

class Container extends React.Component<IContainerProps> {
  public render() {
    return <UserPreferences {...this.props} />;
  }
}

export default Container;
