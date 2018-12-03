import * as React from "react";
import MainView from "views/MainView";
import { Route, Switch, Redirect } from "react-router-dom";
import ListView from "views/ListView";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  region: string;
}

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

interface IRouteProps {
  region: string;
  onClickRegion: (region: string) => (actions: object) => void;
}

class App extends React.Component<IRouteProps> {
  public render() {
    const { region, onClickRegion } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header region={region} onClickRegion={onClickRegion} />
        <Routes region={region} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
