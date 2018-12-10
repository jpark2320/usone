import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postWorkActions } from "redux/modules/summaryWorkPosts";
import { actionCreators as postVisaActions } from "redux/modules/summaryVisaPosts";
import { actionCreators as postRentActions } from "redux/modules/summaryRentPosts";
import { actionCreators as postQandaActions } from "redux/modules/summaryQandaPosts";

const mapStateToProps = (state, ownProps) => {
  const {
    summaryWorkPosts: { summaryWorkPosts },
    summaryVisaPosts: { summaryVisaPosts },
    summaryRentPosts: { summaryRentPosts },
    summaryQandaPosts: { summaryQandaPosts }
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
      dispatch(postWorkActions.getSummaryWorkPosts(region, limit, order, desc));
    },
    getSummaryVisaPosts: (region, limit, order, desc) => {
      dispatch(postVisaActions.getSummaryVisaPosts(region, limit, order, desc));
    },
    getSummaryRentPosts: (region, limit, order, desc) => {
      dispatch(postRentActions.getSummaryRentPosts(region, limit, order, desc));
    },
    getSummaryQandaPosts: (region, limit, order, desc) => {
      dispatch(
        postQandaActions.getSummaryQandaPosts(region, limit, order, desc)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
