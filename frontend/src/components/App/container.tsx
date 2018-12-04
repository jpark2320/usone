import * as React from "react";
import App from "./presenter";

interface IProps {
  location: Location;
}

interface IState {
  region: string;
}

class Container extends React.Component<IProps, IState> {
  public state: IState = {
    region: "georgia"
  };

  public onClickRegion = (regionParm: string) => (actions: object) => {
    console.log(regionParm);
    this.setState({ region: regionParm });
  };

  public render() {
    return (
      <App
        {...this.props}
        region={this.state.region}
        onClickRegion={this.onClickRegion}
      />
    );
  }
}

export default Container;
