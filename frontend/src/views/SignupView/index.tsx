import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (username, password1, password2) => {
      dispatch(userActions.createAccount(username, password1, password2));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
