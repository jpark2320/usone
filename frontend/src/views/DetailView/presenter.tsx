import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import DetailBoard from "components/DetailBoard";
import styles from "./styles";

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
  post: any;
  match: any;
}

class DetailView extends React.Component<IamProps> {
  public render() {
    const { classes, post } = this.props;

    return (
      <div className={classes.root}>
        {/* Main */}
        <main className={classes.bodyContainer}>
          <React.Fragment>
            <CssBaseline />
            {post && <DetailBoard post={post} />}
          </React.Fragment>
        </main>
        {/* End Main */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailView);
