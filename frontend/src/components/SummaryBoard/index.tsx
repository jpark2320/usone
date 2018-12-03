import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: {
      summaryWorkPosts,
      summaryVisaPosts,
      summaryRentPosts,
      summaryQandaPosts
    }
  } = state;
  return {
    summaryWorkPosts,
    summaryVisaPosts,
    summaryRentPosts,
    summaryQandaPosts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSummaryWorkPosts: (region, limit, order, desc) => {
      dispatch(postActions.getSummaryWorkPosts(region, limit, order, desc));
    },
    getSummaryVisaPosts: (region, limit, order, desc) => {
      dispatch(postActions.getSummaryVisaPosts(region, limit, order, desc));
    },
    getSummaryRentPosts: (region, limit, order, desc) => {
      dispatch(postActions.getSummaryRentPosts(region, limit, order, desc));
    },
    getSummaryQandaPosts: (region, limit, order, desc) => {
      dispatch(postActions.getSummaryQandaPosts(region, limit, order, desc));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
