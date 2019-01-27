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
import { Link } from "react-router-dom";

import styles from "./styles";

interface IProps {
  classes: any;
  handleSubmit: (event: any) => void;
}

const PasswordResetView: React.SFC<IProps> = props => {
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
              Password Reset
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus={true}
                />
              </FormControl>
              <Typography variant="caption">
                To confirm your identification, you will receive an email to
                reset your password.
              </Typography>
              <Button
                type="submit"
                fullWidth={true}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
              <Link to="/login">
                <Button
                  type="button"
                  fullWidth={true}
                  variant="contained"
                  color="default"
                  className={classes.submit}
                >
                  Back
                </Button>
              </Link>
            </form>
          </Paper>
        </main>
      </main>
    </div>
  );
};

export default withStyles(styles)(PasswordResetView);
