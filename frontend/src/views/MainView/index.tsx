import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { postsByRegion }
  } = state;
  return { postsByRegion };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSummaryPosts: () => {
      dispatch(
        postActions.getSummaryPosts("georgia", "work", 10, "created_at", "desc")
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
