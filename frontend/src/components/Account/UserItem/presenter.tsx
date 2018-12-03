
import React from 'react';
// import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




class UserProfile extends React.Component<any,any> {
    // constructor(props: any) {
    //   super(props);
    //   this.state = {
    //     expanded: null,
    //   };
    // }

    public render() {
      const { classes } = this.props;
        return (
    


      <React.Fragment>
      <Grid classes = {classes} container={true} spacing={24}>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            required={true}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth={true}
            autoComplete="fname"
          />
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            required={true}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth={true}
            autoComplete="lname"
          />
        </Grid>
        <Grid item={true} xs={12}>
          <TextField
            required={true}
            id="address1"
            name="address1"
            label="Address line 1s"
            fullWidth={true}
            autoComplete="billing address-line1"
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
          <TextField id="state" name="state" label="State/Province/Region" fullWidth={true} />
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
        <Grid item={true} xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>

);
}
}

export default withStyles(styles, { withTheme: true })(UserProfile);