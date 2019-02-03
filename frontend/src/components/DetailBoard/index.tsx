import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (id: number) => {
      dispatch(postActions.deletePost(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
