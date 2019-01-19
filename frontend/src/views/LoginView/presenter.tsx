import * as React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

const LoginView: React.SFC<IProps> = props => {
  const { classes, handleSubmit } = props;

  return (
    <div className={classes.root}>
      <main className={classes.bodyContainer}>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="username">Email Address</InputLabel>
                <Input
                  id="username"
                  name="username"
                  autoComplete="username"
                  autoFocus={true}
                />
              </FormControl>
              <FormControl margin="normal" required={true} fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth={true}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
              <div className={classes.optionLayout}>
                No account?
                <Link to="/signup">
                  <Button
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>

              <div className={classes.optionLayout}>
                <Link to="/password-reset">
                  Forgot password? 그럼 클릭해 ㅅㅂ
                </Link>
              </div>
            </form>
          </Paper>
        </main>
      </main>
    </div>
  );
};

export default withStyles(styles)(LoginView);
