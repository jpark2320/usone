import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header";
import Footer from "../Footer";

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

interface IState {
  region: string;
}

export interface IProps {
  region: string;
}

class App extends React.Component<IProps, IState> {
  public state = {
    region: "georgia"
  };

  public onClickRegion = (regionParm: string) => (actions: object) => {
    this.setState({ region: regionParm });
  };

  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header region={this.state.region} onClickRegion={this.onClickRegion} />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
