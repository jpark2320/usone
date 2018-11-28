import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = state => ({
  counter: state.counter,
  router: state.router
});

export default connect(mapStateToProps)(Container);
