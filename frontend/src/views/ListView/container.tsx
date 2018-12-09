import * as React from "react";
import ListView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const categoryExternalNameConversion = {
  job: "Work",
  sell: "",
  buy: "",
  house: "",
  visa: ""
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
}

class Container extends React.Component<IProps> {
  public componentDidMount() {
    const {
      getFilteredPosts,
      // getSummaryVisaPosts,
      // getSummaryRentPosts,
      // getSummaryQandaPosts,
      filteredPosts
      // summaryVisaPosts,
      // summaryRentPosts,
      // summaryQandaPosts
    } = this.props;

    const limit = 20;
    const orderBy = "created_at";
    const inDescOrder = "desc";
    if (!filteredPosts) {
      getFilteredPosts("georgia", "work", limit, orderBy, inDescOrder);
    }
    // if (!summaryVisaPosts) {
    //   getSummaryVisaPosts(region, limit, orderBy, inDescOrder);
    // }
    // if (!summaryRentPosts) {
    //   getSummaryRentPosts(region, limit, orderBy, inDescOrder);
    // }
    // if (!summaryQandaPosts) {
    //   getSummaryQandaPosts(region, limit, orderBy, inDescOrder);
    // }
  }

  public componentDidUpdate(prevProps, prevState) {
    const {
      region,
      getFilteredPosts
      // getSummaryVisaPosts,
      // getSummaryRentPosts,
      // getSummaryQandaPosts
    } = this.props;

    const limit = 20;
    const orderBy = "created_at";
    const inDescOrder = "desc";

    if (prevProps.region !== region) {
      getFilteredPosts(
        region,
        categoryExternalNameConversion[this.props.category],
        limit,
        orderBy,
        inDescOrder
      );
      // getSummaryVisaPosts(region, limit, orderBy, inDescOrder);
      // getSummaryRentPosts(region, limit, orderBy, inDescOrder);
      // getSummaryQandaPosts(region, limit, orderBy, inDescOrder);
    }
  }

  public render() {
    const {
      region,
      filteredPosts,
      category
      // summaryVisaPosts,
      // summaryRentPosts,
      // summaryQandaPosts
    } = this.props;
    // const summaryAllPosts = [
    //   ["Work", summaryWorkPosts],
    //   ["Visa", summaryVisaPosts],
    //   ["Rent", summaryRentPosts],
    //   ["Q&A", summaryQandaPosts]
    // ];
    console.log(filteredPosts, "여기");

    return (
      <ListView
        {...this.props}
        region={region}
        posts={filteredPosts}
        category={category}
      />
    );
  }
}

export default Container;
