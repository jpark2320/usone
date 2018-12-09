import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/Header";
import Footer from "components/Footer";
import LoginView from "views/LoginView";
import SignupView from "views/SignupView";

interface IProps {
  region: string;
  onClickRegion: (region: string) => (actions: object) => void;
}

const App: React.SFC<IProps> = props => {
  const { region, onClickRegion } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header region={region} onClickRegion={onClickRegion} />
      <Routes region={region} />
      <Footer />
    </React.Fragment>
  );
};

interface IRouteProps {
  region: string;
}

const Routes: React.SFC<IRouteProps> = props => (
  <Switch>
    <Route
      path={"/"}
      exact={true}
      render={() => <MainView region={props.region} {...props} />}
    />
    <Route
      path={"/sell"}
      render={() => <ListView category={"sell"} region={props.region} />}
    />
    <Route
      path={"/buy"}
      render={() => <ListView category={"buy"} region={props.region} />}
    />
    <Route
      path={"/house"}
      render={() => <ListView category={"house"} region={props.region} />}
    />
    <Route
      path={"/job"}
      render={() => <ListView category={"job"} region={props.region} />}
    />
    <Route
      path={"/visa"}
      render={() => <ListView category={"visa"} region={props.region} />}
    />
    <Route
      path={"/ad"}
      render={() => <MainView region={props.region} {...props} />}
    />
    <Route path={"/login"} component={LoginView} />
    <Route path={"/signup"} component={SignupView} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
