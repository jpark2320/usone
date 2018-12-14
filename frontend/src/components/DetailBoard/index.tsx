import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as getPostActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    post: { post }
  } = state;
  return {
    post
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getViewPost: id => {
      dispatch(getPostActions.getViewPost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
