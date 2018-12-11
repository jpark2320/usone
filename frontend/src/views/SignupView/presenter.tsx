import * as React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/core/Icon";

import styles from "./styles";

interface IProps {
  classes: any;
  handleSubmit: (event: any) => void;
}

const SignupView: React.SFC<IProps> = props => {
  const { classes, handleSubmit } = props;

  return (
    <div className={classes.root}>
      <main className={classes.bodyContainer}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  name="username"
                  autoComplete="username"
                  autoFocus={true}
                />
              </FormControl>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="password1">Password</InputLabel>
                <Input
                  name="password1"
                  type="password"
                  id="password1"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                <Input
                  name="password2"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                />
              </FormControl>
              <Typography variant="caption">
                By creating an account, you agree to USOne's Conditions of Use
                and Privacy Notice.
              </Typography>
              <Button
                type="submit"
                fullWidth={true}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </Paper>
        </main>
      </main>
    </div>
  );
};

export default withStyles(styles)(SignupView);
