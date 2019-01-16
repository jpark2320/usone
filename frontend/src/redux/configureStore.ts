import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import user from "./modules/user";
import posts from "./modules/posts";
import summaryWorkPosts from "./modules/summaryWorkPosts";
import summaryRentPosts from "./modules/summaryRentPosts";
import summaryVisaPosts from "./modules/summaryVisaPosts";
import summaryQandaPosts from "./modules/summaryQandaPosts";

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

// Add redux-logger to middlewares only on dev environment
const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  router: connectRouter(history),
  user,
  posts,
  summaryWorkPosts,
  summaryRentPosts,
  summaryVisaPosts,
  summaryQandaPosts
});

export default function configureStore(preloadedState) {
  let store;

  if (env === "development") {
    store = createStore(
      reducer, // root reducer with router state
      preloadedState,
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          ...middlewares
        )
      )
    );
  } else {
    store = createStore(
      reducer, // root reducer with router state
      preloadedState,
      compose(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          ...middlewares
        )
      )
    );
  }

  return store;
}
