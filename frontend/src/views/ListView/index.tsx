import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as postFilteredActions } from "redux/modules/posts";

const pathToCategory = {
  "/job": "work",
  "/sell": "sell",
  "/buy": "buy",
  "/house": "rent",
  "/visa": "visa"
};

const mapStateToProps = (state, ownProps) => {
  const {
    posts: { filteredPosts }
  } = state;
  const region = state.user.region;
  const category = pathToCategory[state.routing.location.pathname];
  console.log("please check here " + category);
  return { filteredPosts, region, category };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFilteredPosts: (region, category, limit, order, desc, page?) => {
      dispatch(
        postFilteredActions.getFilteredPosts(
          region,
          category,
          limit,
          order,
          desc,
          page
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
