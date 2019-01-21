import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "components/Header";
import Footer from "components/Footer";
import LoginView from "views/LoginView";
import SignupView from "views/SignupView";
import DetailView from "views/DetailView";
import "normalize.css";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

const Routes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={MainView} />
    <Route path={"/sell"} component={ListView} />
    <Route path={"/buy"} component={ListView} />
    <Route path={"/house"} component={ListView} />
    <Route path={"/job"} component={ListView} />
    <Route path={"/visa"} component={ListView} />
    <Route path={"/ad"} component={ListView} />
    <Route path={"/login"} component={LoginView} />
    <Route path={"/signup"} component={SignupView} />
    <Route path={"/posts/post/:postID/"} component={DetailView} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default App;
