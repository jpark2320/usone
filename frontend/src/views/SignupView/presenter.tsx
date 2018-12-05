import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Header from "components//Header";
import RegisterComponent from "components/RegisterComponent";
import styles from "./styles";

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
}

class SignupView extends React.Component<IamProps> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.bodyContainer}>
          <RegisterComponent />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignupView);
