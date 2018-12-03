import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Header from "components//Header";
import styles from "../styles";
import RegisterComponent from 'components/RegisterComponent';

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
}

class MainView extends React.Component<IamProps> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        {/* Main */}
        <main className={classes.bodyContainer}>
        <RegisterComponent/>
          {/*put body here */}
          {/*put body here */}
          {/*put body here */}
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainView);
