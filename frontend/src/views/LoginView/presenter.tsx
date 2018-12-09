import * as React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/core/Icon";

import styles from "./styles";

interface IProps {
  classes: any;
  handleInputChange: (event: any) => void;
  handleSubmit: (event: any) => void;
  handleFacebookLogin: (response: any) => void;
  usernameValue: string;
  passwordValue: string;
}

const LoginView: React.SFC<IProps> = props => {
  const {
    classes,
    handleInputChange,
    handleSubmit,
    handleFacebookLogin,
    usernameValue,
    passwordValue
  } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus={true}
              value={usernameValue}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
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
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(LoginView);
