import { connect } from "react-redux";
import Container from "./container";
import { actionCreators } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { post }
  } = state;
  return {
    post
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getViewPost: (id: any) => {
      dispatch(actionCreators.getViewPost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
