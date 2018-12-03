import * as React from "react";
import SummaryBoard from "./presenter";

interface IProps {
  title: string;
  region: string;
  category: string;
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
  public state = {
    page: 1
  };

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
    console.log(region);
    if (!summaryWorkPosts && this.props.category === "work") {
      getSummaryWorkPosts(region, limit, orderBy, inDescOrder);
    } else if (!summaryVisaPosts && this.props.category === "visa") {
      getSummaryVisaPosts(region, limit, orderBy, inDescOrder);
    } else if (!summaryRentPosts && this.props.category === "rent") {
      getSummaryRentPosts(region, limit, orderBy, inDescOrder);
    } else if (!summaryQandaPosts && this.props.category === "qanda") {
      getSummaryQandaPosts(region, limit, orderBy, inDescOrder);
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
