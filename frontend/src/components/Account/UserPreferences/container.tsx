import * as React from "react";
import UserPreferences from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IContainerProps {
  theme: Theme;
  container: Element;
  allPosts: string[];
  getAllPosts: () => string[];
}

class Container extends React.Component<IContainerProps> {
  public state = {
    page: 1
  };

  public componentDidMount() {
    const { getAllPosts, allPosts } = this.props;

    if (!allPosts) {
      getAllPosts();
    }
  }

  public render() {
    const { allPosts } = this.props;
    console.log(allPosts);

    return <UserPreferences {...this.props} />;
  }
}

export default Container;
