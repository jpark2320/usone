import { connect } from "react-redux";
import container from "./container";

export function listviewDispatch(data?: any) {
  return {
    payload: null,
    type: "TEST_LISTVIEW_REDUCER"
  };
}

export default connect()(container);