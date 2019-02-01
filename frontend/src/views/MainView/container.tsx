import * as React from "react";
import MainView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const boards = [
  {
    title: "비자"
  },
  {
    title: "묻고답하기"
  },
  {
    title: "렌트/룸메/서브리스"
  },
  {
    title: "Jobs"
  }
];

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
  summaryWorkPosts: any;
  getSummaryWorkPosts: (region, limit, order, desc) => object;
  summaryVisaPosts: any;
  getSummaryVisaPosts: (region, limit, order, desc) => object;
  summaryRentPosts: any;
  getSummaryRentPosts: (region, limit, order, desc) => object;
  summaryQandaPosts: any;
  getSummaryQandaPosts: (region, limit, order, desc) => object;
  region: any;
}

class Container extends React.Component<IProps> {
  public componentDidMount() {
    const {
      getSummaryWorkPosts,
      getSummaryVisaPosts,
      getSummaryRentPosts,
      getSummaryQandaPosts,
      summaryWorkPosts,
      summaryVisaPosts,
      summaryRentPosts,
      summaryQandaPosts,
      region
    } = this.props;

    const limit = 10;
    const orderBy = "created_at";
    const inDescOrder = "desc";

    if (!summaryWorkPosts) {
      getSummaryWorkPosts(region, limit, orderBy, inDescOrder);
    }
    if (!summaryVisaPosts) {
      getSummaryVisaPosts(region, limit, orderBy, inDescOrder);
    }
    if (!summaryRentPosts) {
      getSummaryRentPosts(region, limit, orderBy, inDescOrder);
    }
    if (!summaryQandaPosts) {
      getSummaryQandaPosts(region, limit, orderBy, inDescOrder);
    }
  }

  public componentDidUpdate(prevProps, prevState) {
    const {
      getSummaryWorkPosts,
      getSummaryVisaPosts,
      getSummaryRentPosts,
      getSummaryQandaPosts,
      region
    } = this.props;

    const limit = 10;
    const orderBy = "created_at";
    const inDescOrder = "desc";

    if (prevProps.region !== region) {
      getSummaryWorkPosts(region, limit, orderBy, inDescOrder);
      getSummaryVisaPosts(region, limit, orderBy, inDescOrder);
      getSummaryRentPosts(region, limit, orderBy, inDescOrder);
      getSummaryQandaPosts(region, limit, orderBy, inDescOrder);
    }
  }
  public render() {
    const {
      region,
      summaryWorkPosts,
      summaryVisaPosts,
      summaryRentPosts,
      summaryQandaPosts
    } = this.props;
    const summaryAllPosts = [
      ["Work", summaryWorkPosts],
      ["Visa", summaryVisaPosts],
      ["Rent", summaryRentPosts],
      ["Q&A", summaryQandaPosts]
    ];
    return (
      <MainView
        {...this.props}
        region={region}
        boards={boards}
        summaryAllPosts={summaryAllPosts}
      />
    );
  }
}

export default Container;
