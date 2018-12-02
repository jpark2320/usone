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
  console.log("summaryboard " + ownProps.region);
  return {
    getSummaryPosts: () => {
      dispatch(
        postActions.getSummaryPosts(
          ownProps.region,
          ownProps.category,
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
