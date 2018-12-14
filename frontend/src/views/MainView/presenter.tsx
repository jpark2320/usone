import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DetailBoard from "components/DetailBoard";
import styles from "./styles";

interface IBoard {
  title: string;
}

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
  region: string;
  boards: IBoard[];
  summaryAllPosts: any[];
}

class MainView extends React.Component<IamProps> {
  public render() {
    const { classes, summaryAllPosts } = this.props;

    let summaryAllPostsOrUndef;
    if (!summaryAllPosts) {
      summaryAllPostsOrUndef = [];
    } else {
      summaryAllPostsOrUndef = summaryAllPosts;
    }

    return (
      <div className={classes.root}>
        {/* Main */}
        <main className={classes.bodyContainer}>
          <div className={classes.MainView_GridContainer}>
            <Grid container={true} spacing={24}>
              {summaryAllPostsOrUndef.map((summaryPost, index) => (
                <Grid key={index} item={true} xs={12} sm={6}>
                  <Paper className={classes.MainView__paper}>
                    <DetailBoard id={4} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainView);
