import * as React from "react";
import ListView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const categoryExternalNameConversion = {
  "/job": "work",
  "/sell": "sell",
  "/buy": "buy",
  "/house": "rent",
  "/visa": "visa"
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
  getFilteredPosts: (region, category, limit, order, desc, page?) => object;
  getFilteredPostsWithUrlForNextOrPrevPages: (Pageurl) => object;
}

class Container extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props
    };
    this.dataReworkRespondforNextPages = this.dataReworkRespondforNextPages;
  }

  public componentDidMount() {
    const { region, getFilteredPosts, filteredPosts, category } = this.props;

    const page_size = 5;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    if (!filteredPosts) {
      getFilteredPosts(
        region,
        categoryExternalNameConversion[category],
        page_size,
        orderBy,
        inDescOrder
      );
    }
  }

  public componentDidUpdate(prevprop) {
    const { region, getFilteredPosts, category } = this.props;
    const page_size = 5;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    console.log(
      "category change is " + prevprop.category + "  cate " + category
    );
    if (prevprop.region !== region || prevprop.category !== category) {
      getFilteredPosts(
        region,
        categoryExternalNameConversion[category],
        page_size,
        orderBy,
        inDescOrder
      );
    }
  }

  public dataReworkRespondforNextPages = (page_size, page) => {
    const { region, getFilteredPosts, category } = this.props;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    getFilteredPosts(
      region,
      categoryExternalNameConversion[category],
      page_size,
      orderBy,
      inDescOrder,
      page
    );
  };

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
