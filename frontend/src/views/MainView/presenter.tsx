import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import CreatePost from "components/CreatePost";
import styles from "shared/styles/globalStyles";

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
  region: string;
}

class MainView extends React.Component<IamProps> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Main */}
        <main className={classes.bodyContainer}>
          <CreatePost />
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainView);
