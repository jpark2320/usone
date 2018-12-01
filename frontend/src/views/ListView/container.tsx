import * as React from "react";
import MainView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
  allPosts: string[];
  getSummaryPosts: (region) => string[];
}

class Container extends React.Component<IContainerProps> {
  public state = {
    page: 1
  };

  public componentDidMount() {
    const { getSummaryPosts, allPosts } = this.props;

    if (!allPosts) {
      getSummaryPosts("georgia");
    }
  }

  public render() {
    const { allPosts } = this.props;
    console.log(allPosts);

    return <MainView {...this.props} />;
  }
}

export default Container;
