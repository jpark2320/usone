import * as React from "react";
import MainView from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const boards = [
  {
    title: "비자",
    key: "visa"
  },
  {
    title: "묻고답하기",
    key: "qanda"
  },
  {
    title: "렌트/룸메/서브리스",
    key: "rent"
  },
  {
    title: "Jobs",
    key: "work"
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
  region: string;
  summaryWorkPosts: any;
  getSummaryWorkPosts: (region, limit, order, desc) => object;
  summaryVisaPosts: any;
  getSummaryVisaPosts: (region, limit, order, desc) => object;
  summaryRentPosts: any;
  getSummaryRentPosts: (region, limit, order, desc) => object;
  summaryQandaPosts: any;
  getSummaryQandaPosts: (region, limit, order, desc) => object;
}

class Container extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps: IProps) {
    console.log("thisProps " + this.props.region);
    console.log("nextProps " + nextProps.region);
    return (
      nextProps.region !== this.props.region ||
      nextProps.summaryRentPosts !== this.props.summaryRentPosts ||
      nextProps.summaryWorkPosts !== this.props.summaryWorkPosts ||
      nextProps.summaryVisaPosts !== this.props.summaryVisaPosts ||
      nextProps.summaryQandaPosts !== this.props.summaryQandaPosts
    );
  }

  public componentDidMount() {
    const {
      region,
      summaryWorkPosts,
      getSummaryWorkPosts,
      summaryVisaPosts,
      getSummaryVisaPosts,
      summaryRentPosts,
      getSummaryRentPosts,
      summaryQandaPosts,
      getSummaryQandaPosts
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
  public render() {
    const {
      region,
      summaryWorkPosts,
      summaryVisaPosts,
      summaryRentPosts,
      summaryQandaPosts
    } = this.props;
    return (
      <MainView
        {...this.props}
        region={region}
        boards={boards}
        summaryWorkPosts={summaryWorkPosts}
        summaryVisaPosts={summaryVisaPosts}
        summaryRentPosts={summaryRentPosts}
        summaryQandaPosts={summaryQandaPosts}
      />
    );
  }
}

export default Container;
