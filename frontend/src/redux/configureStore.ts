import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import user from "./modules/user";
import posts from "./modules/posts";
import { logger } from "redux-logger";

const env = process.env.NODE_ENV;
const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  // const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  routing: routerReducer,
  user,
  posts
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();