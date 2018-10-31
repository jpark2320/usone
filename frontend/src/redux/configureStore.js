import { createStore, combineReducers } from "redux";
import user from "redux/modules/user";

const reducer = combineReducers({
  user
});

let store = initialState => createStore(reducer);

export default store();
