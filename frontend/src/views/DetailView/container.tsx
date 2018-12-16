import * as React from "react";
import DetailView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IProps {
  theme: Theme;
  container: Element;
  postID: any;
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
    const { getViewPost, post } = this.props;
    if (!post) {
      getViewPost(postID);
    }
  }

  public componentDidUpdate(prevProps, prevState) {
    const postID = this.props.postID;
    const prevPostID = prevProps.match.params.postID;
    console.log("a" + postID);
    console.log("b" + prevPostID);
    if (this.props.match.params.postID !== prevPostID) {
      this.props.getViewPost(prevPostID);
    }
  }

  public render() {
    const { post } = this.props;
    return <DetailView {...this.props} post={post} />;
  }
}

export default Container;
