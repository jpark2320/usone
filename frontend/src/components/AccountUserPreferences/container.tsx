import * as React from "react";
import AccountUserPreferences from "./presenter";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface IContainerProps {
  theme: Theme;
  container: Element;
  changeToEditView: any;
}

interface IContainerStates {
  theme: Theme;
  container: Element;
  language: string;
  buy: boolean;
  sell: boolean;
  housing: boolean;
  jobs: boolean;
  visaqna: boolean;
  adqna: boolean;
}

class Container extends React.Component<IContainerProps, IContainerStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      language: "korean",
      buy: false,
      sell: false,
      housing: false,
      jobs: false,
      visaqna: false,
      adqna: false
    };
  }

  public prefferedLanuagehandleChange = event => {
    this.setState({ [event.target.name]: event.target.value } as any);
  };

  public perferredListhandleChange = (name: string) => event => {
    this.setState({ [name]: event.target.checked } as any);
  };

  public render() {
    return (
      <AccountUserPreferences
        {...this.state}
        prefferedLanuagehandleChange={this.prefferedLanuagehandleChange}
        perferredListhandleChange={this.perferredListhandleChange}
        changeToEditView={this.props.changeToEditView}
      />
    );
  }
}

export default Container;
