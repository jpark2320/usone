import React from "react";
// import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class AccountUserAddressEdit extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dispaySuccessNotice: false
    };
  }

  public snackBarHandleClose = () => {
    this.setState({ dispaySuccessNotice: false });
  };

  public dispaySuccessNotice = () => {
    this.setState({ dispaySuccessNotice: true });
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form noValidate={true} autoComplete="off">
          <Paper className={classes.root} elevation={1}>
            <Grid container={true} spacing={24}>
              <Grid item={true} xs={12}>
                <Typography variant={"h5"} className={classes.secondaryHeading}>
                  주소 변경
                </Typography>
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
              <Grid item={true} xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid>
              <Grid className={classes.childCenterAlign} item={true} xs={12}>
                <div className={classes.rightAlign}>
                  <Button
                    onClick={this.props.changeToEditView}
                    color="secondary"
                  >
                    Cancel
                  </Button>
                  <Button onClick={this.dispaySuccessNotice} color="primary">
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </form>
        <Snackbar
          open={this.state.dispaySuccessNotice}
          onClose={this.snackBarHandleClose}
          onExited={this.snackBarHandleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          autoHideDuration={6000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">주소를 변경 하였습니다.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.snackBarHandleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AccountUserAddressEdit);
