import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import TextField from "@material-ui/core/TextField";

import styles from "./styles";
import { Grid, Typography, withMobileDialog } from "@material-ui/core";

export interface IRegisterProps extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
}

class InformationForm extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <React.Fragment>
          <Typography variant="h6" gutterBottom={true}>
            Personal Information
          </Typography>

          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth={true}
                autoComplete="given-name"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth={true}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                required={true}
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth={true}
                autoComplete="address-line1"
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                id="addiress2"
                name="addiress2"
                label="Address line 2"
                fullWidth={true}
                autoComplete="billing address-line2"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="city"
                name="city"
                label="City"
                fullWidth={true}
                autoComplete="billing address-level2"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth={true}
                autoComplete="billing postal-code"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="country"
                name="country"
                label="Country"
                fullWidth={true}
                autoComplete="billing country"
              />
            </Grid>
            
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}
export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(InformationForm)
);
