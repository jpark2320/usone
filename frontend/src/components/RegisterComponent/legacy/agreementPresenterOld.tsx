import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  withMobileDialog,
  withStyles
} from "@material-ui/core";
import React from "react";
import styles from "../styles";

function AgreementPresenter() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom={true}>
        OMG this is very boring no one gonna read anyway Just hit Next Plz
      </Typography>
      <Grid item={true} xs={12}>
        <FormControlLabel
          control={
            <Checkbox color="secondary" name="agreementCheck" value="yes" />
          }
          label="Please check this and proceed to next page"
        />
      </Grid>
    </React.Fragment>
  );
}

export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(AgreementPresenter)
);
