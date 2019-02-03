import * as React from "react";
import ListView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface IPostProps {
  id: number;
  region: string;
  category: string;
  description: string;
  title: string;
  comment_set: string[];
}

export interface IPostsProps {
  category: string;
  results: IPostProps[];
}

export interface IProps {
  theme: Theme;
  container: Element;
  region: string;
  filteredPosts: any;
  category: string;
  getFilteredPosts: (region, category, limit, order, desc, page?) => object;
  getFilteredPostsWithUrlForNextOrPrevPages: (Pageurl) => object;
}

class Container extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      isModalOpen: false
    };
    this.dataReworkRespondforNextPages = this.dataReworkRespondforNextPages;
  }

  public componentDidMount() {
    const { region, getFilteredPosts, category } = this.props;

    const page_size = 5;
    const orderBy = "created_at";
    const inDescOrder = "desc";

    getFilteredPosts(region, category, page_size, orderBy, inDescOrder);
  }

  public componentDidUpdate(prevprop) {
    const { region, getFilteredPosts, category } = this.props;
    const page_size = 5;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    if (prevprop.region !== region || prevprop.category !== category) {
      getFilteredPosts(region, category, page_size, orderBy, inDescOrder);
    }
  }

  public dataReworkRespondforNextPages = (page_size, page) => {
    const { region, getFilteredPosts, category } = this.props;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    getFilteredPosts(region, category, page_size, orderBy, inDescOrder, page);
  };
  public handleClickOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  public displayInputForMobile = event => {
    this.setState({
      showInputBaseForMobile: !this.state.showInputBaseForMobile
    });
  };

  public render() {
    const { region, filteredPosts, category } = this.props;
    return (
      <ListView
        {...this.state}
        region={region}
        posts={filteredPosts}
        category={category}
        displayInputForMobile={this.displayInputForMobile}
        isModalOpen={this.state.isModalOpen}
        handleClickOpen={this.handleClickOpen}
        dataReworkRespondforNextPages={this.dataReworkRespondforNextPages}
      />
    );
  }
}

export default Container;
