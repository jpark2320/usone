import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { allPosts }
  } = state;
  return { allPosts };
};

const mapDispatchToProps = (dispatch, ownProps) => {
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
