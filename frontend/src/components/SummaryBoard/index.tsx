import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { summaryPosts }
  } = state;
  return { summaryPosts };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("summaryboard " + ownProps.region);
  return {
    getSummaryPosts: (region, category, limit, order, inDescOrder) => {
      dispatch(
        postActions.getSummaryPosts(region, category, limit, order, inDescOrder)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
