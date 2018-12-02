import * as React from "react";
import SummaryBoard from "./presenter";

interface IProps {
  title: string;
  region: string;
  category: string;
  summaryWorkPosts: any;
  getSummaryWorkPosts: () => object;
  summaryVisaPosts: any;
  getSummaryVisaPosts: () => object;
  summaryRentPosts: any;
  getSummaryRentPosts: () => object;
  summaryQandaPosts: any;
  getSummaryQandaPosts: () => object;
}

class Container extends React.Component<IProps> {
  public state = {
    page: 1
  };

  public componentDidMount() {
    const {
      summaryWorkPosts,
      getSummaryWorkPosts,
      summaryVisaPosts,
      getSummaryVisaPosts,
      summaryRentPosts,
      getSummaryRentPosts,
      summaryQandaPosts,
      getSummaryQandaPosts
    } = this.props;

    if (!summaryWorkPosts && this.props.category === "work") {
      getSummaryWorkPosts();
    } else if (!summaryVisaPosts && this.props.category === "visa") {
      getSummaryVisaPosts();
    } else if (!summaryRentPosts && this.props.category === "rent") {
      getSummaryRentPosts();
    } else if (!summaryQandaPosts && this.props.category === "qanda") {
      getSummaryQandaPosts();
    }
  }

  public render() {
    const {
      title,
      category,
      summaryWorkPosts,
      summaryVisaPosts,
      summaryRentPosts,
      summaryQandaPosts
    } = this.props;

    return (
      <SummaryBoard
        title={title}
        category={category}
        summaryWorkPosts={summaryWorkPosts}
        summaryVisaPosts={summaryVisaPosts}
        summaryRentPosts={summaryRentPosts}
        summaryQandaPosts={summaryQandaPosts}
      />
    );
  }
}

export default Container;
