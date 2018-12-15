import * as React from "react";
import ListView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const categoryExternalNameConversion = {
  job: "work",
  sell: "",
  buy: "",
  house: "rent",
  visa: "visa"
};

interface IPostProps {
  id: number;
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
  getFilteredPosts: (region, category, limit, order, desc) => object;
  getFilteredPostsWithUrlForNextOrPrevPages: (Pageurl) => object;
}

class Container extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props
    };
  }

  public componentDidMount() {
    const { getFilteredPosts, filteredPosts } = this.props;

    const limit = 5000;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    if (!filteredPosts) {
      getFilteredPosts(
        this.props.region,
        categoryExternalNameConversion[this.state.category],
        limit,
        orderBy,
        inDescOrder
      );
    }
  }

  public componentDidUpdate(prevprop) {
    const { region, getFilteredPosts } = this.props;
    const limit = 5000;
    const orderBy = "created_at";
    const inDescOrder = "desc";

    if (
      prevprop.region !== this.props.region ||
      prevprop.category !== this.props.category
    ) {
      getFilteredPosts(
        region,
        categoryExternalNameConversion[this.props.category],
        limit,
        orderBy,
        inDescOrder
      );
    }
  }

  public dataReworkRespondforNextPages(PageUrl) {
    const { getFilteredPostsWithUrlForNextOrPrevPages } = this.props;
    getFilteredPostsWithUrlForNextOrPrevPages(PageUrl);
  }

  public render() {
    const { region, filteredPosts, category } = this.props;
    return (
      <ListView
        {...this.state}
        region={region}
        posts={filteredPosts}
        category={category}
        dataReworkRespondforNextPages={this.dataReworkRespondforNextPages}
      />
    );
  }
}

export default Container;
