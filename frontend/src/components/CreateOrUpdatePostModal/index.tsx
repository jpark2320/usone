import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postActions } from "redux/modules/posts";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (tag, title, region, location, description, category) => {
      dispatch(
        postActions.createPost(
          tag,
          title,
          region,
          location,
          description,
          category
        )
      );
    },
    updatePost: (
      id,
      title,
      description,
      tag?,
      region?,
      location?,
      category?
    ) => {
      dispatch(
        postActions.updatePost(
          id,
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
