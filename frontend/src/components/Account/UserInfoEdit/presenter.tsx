
import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
// import { Divider } from '@material-ui/core';
// import Divider from '@material-ui/core/Divider';



class UserProfileEdit extends React.Component<any,any> {



  public cancel = () => {
    this.setState({ snackBaropen: false });
    };

    public editUserProfile = () => {
      this.setState({ open: false, snackBaropen: true });
    };
    public render() {
      const { classes } = this.props;
        return (
      <React.Fragment>

     


          <form
              noValidate={true}
              autoComplete="off"
            >
      <Grid classes = {classes} container={true} spacing={24}>
      <Grid item={true} xs={12}>
        <Typography className={classes.secondaryHeading}>
            유저의 주소를 열람 및 수정합니다.
          </Typography>
        </Grid>
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
        {/* <Grid item={true} xs={12}>
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
        </Grid >
        <Grid item={true} xs={12}>
        <TextField
         required={true}
            id="outlined-phone-input"
            label="Phone Number"
            inputProps={{ pattern: "^[0-9-+s()]*$" }}
            type="tel"
            name="tel"
            autoComplete="tel"
            margin="normal"
              />
        </Grid > */}
        <Grid item={true} xs={12} sm={6}>
          <TextField
            required={true}
            id="newPassword"
            label="새로운 비밀번호 입력"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
        />
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            required={true}
            id="confrimPassword"
            label="비밀번호 다시 입력"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
        />
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <TextField
            required={true}
            id="passwordForApproval"
            label="현재 비밀번호 입력"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
        />
        </Grid>
        <Grid  className={classes.childCenterAlign} item={true} xs={12} sm={6}>
        <div className = {classes.rightAlign} >
        <Button  onClick={this.cancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={this.editUserProfile} color="primary">
          Submit
        </Button>
        </div>
        </Grid>
        
      </Grid>
      </form>
    </React.Fragment>

);
}
}

export default withStyles(styles, { withTheme: true })(UserProfileEdit);