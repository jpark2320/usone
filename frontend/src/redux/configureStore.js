import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "redux/modules/user";

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
