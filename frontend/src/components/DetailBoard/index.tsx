import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (id: number) => {
      dispatch(postActions.deletePost(id));
    },
    updatePost: (tag, title, region, location, description, category) => {
      dispatch(
        postActions.updatePost(
          tag,
          title,
          region,
          location,
          description,
          category
        )
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
