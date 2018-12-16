import * as React from "react";
import DetailView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IProps {
  theme: Theme;
  container: Element;
  post: any;
  getViewPost: (id: any) => object;
  match: any;
}

interface IState {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
}

class Container extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };
  }

  public componentDidMount() {
    const postID = this.props.match.params.postID;
    const { getViewPost } = this.props;
    getViewPost(postID);
  }

  public render() {
    const { post } = this.props;
    return <DetailView {...this.props} post={post} />;
  }
}

export default Container;
