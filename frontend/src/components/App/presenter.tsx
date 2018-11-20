import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";

const App: React.SFC = () => <Routes />;

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={MainView} />
    <Route path="/sell" component={ListView} />
    <Route path="/buy" component={ListView} />
    <Route path="/house" component={ListView} />
    <Route path="/job" component={ListView} />
    <Route path="/visa" component={ListView} />
    <Route path="/ad" component={MainView} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
