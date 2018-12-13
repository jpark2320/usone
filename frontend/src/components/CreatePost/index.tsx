import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (tag, title, location, content, category) => {
      dispatch(postActions.createPost(tag, title, location, content, category));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
