import * as React from "react";
import DetailBoard from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export interface IProps {
  theme: Theme;
  container: Element;
  id: any;
  post: any;
  getViewPost: (id: any) => object;
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
    const { getViewPost, post, id } = this.props;
    if (!post) {
      getViewPost(id);
    }
  }

  public componentDidUpdate(prevProps, prevState) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      this.props.getViewPost(id);
    }
  }

  public render() {
    const { post } = this.props;
    return <DetailBoard {...this.props} post={post} />;
  }
}

export default Container;
