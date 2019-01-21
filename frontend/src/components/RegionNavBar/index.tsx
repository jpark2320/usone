import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const region = state.user.region;
  return { region };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeUserRegion: region => {
      dispatch(userActions.onChangeUserRegion(region));
    },
    getRegion: () => {
      dispatch(userActions.getRegion());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
