import * as React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import styles from "./styles";

interface IProps {
  classes: any;
}

const PasswordResetConfirmView: React.SFC<IProps> = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main className={classes.bodyContainer}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography
              variant="h6"
              gutterBottom={true}
              style={{ lineHeight: "normal" }}
            >
              An email has been sent to you as you requested.
            </Typography>
            <Typography variant="body1" gutterBottom={true}>
              Please check your email. If you don't get any email within a
              minute. Go back and try again.
            </Typography>
            <form className={classes.form}>
              <Button
                type="button"
                fullWidth={true}
                variant="contained"
                color="primary"
                className={classes.submit}
                component={props => <Link to="/login" {...props} />}
              >
                Log in
              </Button>
              <Button
                type="button"
                fullWidth={true}
                variant="contained"
                color="default"
                className={classes.submit}
                component={props => <Link to="/password-reset" {...props} />}
              >
                Back
              </Button>
            </form>
          </Paper>
        </main>
      </main>
    </div>
  );
};

export default withStyles(styles)(PasswordResetConfirmView);
