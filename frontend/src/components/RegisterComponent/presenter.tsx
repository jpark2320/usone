import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import TextField from "@material-ui/core/TextField";

import styles from "./styles";
import {
  Grid,
  Typography,
  withMobileDialog,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

export interface IRegisterProps extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
}

class Presenter extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom={true}>
          Personal Information
        </Typography>

        <Grid container={true} spacing={24} direction={"column"} justify = {"center"}>
          <Grid item={true}>
            <p>If you are already our member Please log in</p>
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
              className="Log In"
            >
              {"Log In"}
            </Button>
          </Grid>

        
          <Grid item={true}>
            <TextField
              required={true}
              id="name"
              name="Name"
              label="Name"
              fullWidth={false}
              autoComplete="name"
            />
          </Grid>

          <Grid item={true}>
            <TextField
              required={true}
              id="nickName"
              name="nickName"
              label="NickName"
              fullWidth={false}
            />
          </Grid>

          <Grid item={true}>
            <TextField
              required={true}
              id="city"
              name="city"
              label="City"
              fullWidth={false}
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item={true}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth={false}
            />
          </Grid>

          <Grid item={true}>
            <TextField
              required={true}
              id="country"
              name="country"
              label="Country"
              fullWidth={false}
              autoComplete="billing country"
            />
          </Grid>
          <Grid>
            <p>This is <a href="url">Terms</a> and <a href="url">Condition</a> Statement</p>
          </Grid>
          <Grid>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="agreementCheck" value="yes" />
              }
              label="Agree to Terms and Conditions"
            />
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
              className="button"
            >
              {"Next"}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  private handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  }
}

export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(Presenter)
);
