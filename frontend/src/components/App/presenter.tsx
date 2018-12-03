import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header";
import Footer from "../Footer";

const Routes: React.SFC<IProps> = props => (
  <Switch>
    <Route
      path={"/"}
      exact={true}
      render={() => <MainView region={props.region} {...props} />}
    />
    <Route path="/sell" component={ListView} />
    <Route path="/buy" component={ListView} />
    <Route path="/house" component={ListView} />
    <Route path="/job" component={ListView} />
    <Route path="/visa" component={ListView} />
    <Route
      path="/ad"
      render={() => <MainView region={props.region} {...props} />}
    />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export interface IProps {
  region: string;
}

class App extends React.Component<IProps> {
  public state = {
    region: "georgia"
  };

  public onClickRegion = (regionParm: string) => (actions: object) => {
    this.setState({ region: regionParm });
    location.reload();
  };

  public render() {
    const region = this.state.region;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header region={region} onClickRegion={this.onClickRegion} />
        <Routes region={region} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
