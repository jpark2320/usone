import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {} = state;
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (tag, title, location, content, category) => {
      dispatch(postActions.addPost(tag, title, location, content, category));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
