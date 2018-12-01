import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import MainViewGrid from "components/MainViewGrid";
import styles from "../styles";

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
  postsByRegion: string[];
}

class MainView extends React.Component<IamProps> {
  public render() {
    const { classes, postsByRegion } = this.props;
    console.log(postsByRegion);
    return (
      <div className={classes.root}>
        {/* Main */}
        <main className={classes.bodyContainer}>
          <MainViewGrid postsByRegion={postsByRegion} />
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainView);
