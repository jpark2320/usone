import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./redux/configureStore";

import MainView from "./views/MainView";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={MainView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
