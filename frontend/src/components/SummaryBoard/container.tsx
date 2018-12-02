import * as React from "react";
import SummaryBoard from "./presenter";

interface IProps {
  title: string;
  summaryPosts: any;
  getSummaryPosts: (region, category, limit, order, inDescOrder) => any;
  region: string;
  category: string;
}

class Container extends React.Component<IProps> {
  public state = {
    page: 1
  };

  public componentDidMount() {
    const { getSummaryPosts, summaryPosts, region, category } = this.props;

    if (!summaryPosts) {
      getSummaryPosts(region, category, 10, "created_at", "desc");
    }
  }

  public render() {
    const { title, summaryPosts } = this.props;
    // console.log(this.props, "여기");
    // console.log(summaryPosts, "me");
    return <SummaryBoard title={title} summaryPosts={summaryPosts} />;
  }
}

export default Container;
