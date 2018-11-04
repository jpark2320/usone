import { createStore, combineReducers, applyMiddleware } from "redux";
<<<<<<< HEAD
=======
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
>>>>>>> JP-1
import thunk from "redux-thunk";
import user from "redux/modules/user";

const env = process.env.NODE_ENV;
<<<<<<< HEAD

const middlewares = [thunk];
=======
const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];
>>>>>>> JP-1

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  routing: routerReducer,
  user
});

<<<<<<< HEAD
let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));
=======
let store;

if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
>>>>>>> JP-1

export default store();
