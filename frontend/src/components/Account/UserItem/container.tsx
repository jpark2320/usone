import * as React from "react";
import UserProfile from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
}

class Container extends React.Component<IContainerProps> {
  public render() {
    return <UserProfile {...this.props} />;
  }
}

export default Container;
