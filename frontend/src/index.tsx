import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./redux/configureStore";


import "./index.css";
// import MainView from 'views/MainView';
import RegisterView from 'views/RegisterView';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RegisterView />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
