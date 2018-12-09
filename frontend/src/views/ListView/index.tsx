import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postFilteredActions } from "redux/modules/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { filteredPosts }
  } = state;
  return {
    filteredPosts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFilteredPosts: (region, category, limit, order, desc) => {
      dispatch(
        postFilteredActions.getFilteredPosts(
          region,
          category,
          limit,
          order,
          desc
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
