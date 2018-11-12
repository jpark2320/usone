import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";

const App: React.SFC = () => <Routes />;

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={MainView} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
