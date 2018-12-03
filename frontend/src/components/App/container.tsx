import * as React from "react";
import App from "./presenter";

interface IState {
  region: string;
}

class Container extends React.Component<{}, IState> {
  public state: IState = {
    region: "georgia"
  };

  public onClickRegion = (regionParm: string) => (actions: object) => {
    console.log(regionParm);
    this.setState({ region: regionParm });
    console.log(this.state.region);
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
