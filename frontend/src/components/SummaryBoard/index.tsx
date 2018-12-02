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
    getSummaryWorkPosts: () => {
      dispatch(
        postActions.getSummaryWorkPosts(
          ownProps.region,
          10,
          "created_at",
          "desc"
        )
      );
    },
    getSummaryVisaPosts: () => {
      dispatch(
        postActions.getSummaryVisaPosts(
          ownProps.region,
          10,
          "created_at",
          "desc"
        )
      );
    },
    getSummaryRentPosts: () => {
      dispatch(
        postActions.getSummaryRentPosts(
          ownProps.region,
          10,
          "created_at",
          "desc"
        )
      );
    },
    getSummaryQandaPosts: () => {
      dispatch(
        postActions.getSummaryQandaPosts(
          ownProps.region,
          10,
          "created_at",
          "desc"
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
