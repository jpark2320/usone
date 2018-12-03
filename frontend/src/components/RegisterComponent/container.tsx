import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

// import TextField from "@material-ui/core/TextField";

import styles from "./styles";
import { withMobileDialog } from "@material-ui/core";
import Presenter from "./presenter";

export interface IRegisterProps extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
}

class Container extends React.Component<IRegisterProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  public render() {
    return (
      <div>
        <Presenter {...this.props} />
      </div>
    );
  }

  // private handleNext = () => {
  //   this.setState(state => ({
  //     activeStep: state.activeStep + 1
  //   }));
  // };

  // private handleBack = () => {
  //   this.setState(state => ({
  //     activeStep: state.activeStep - 1
  //   }));
  // };

  //   private handleReset = () => {
  //     this.setState({
  //       activeStep: 0
  //     });
  //   };
}
export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(Container)
);
