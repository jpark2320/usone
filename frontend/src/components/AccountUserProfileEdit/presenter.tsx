import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface IProps {
  classes: any;
  changeToEditView: any;
  successMessageClose: () => void;
  dispaySuccessNotice: boolean;
  checkPasswordFunc: any;
  value: string;
  currentPasswordChanges: any;
}

const AccountUserProfileEdit: React.SFC<IProps> = props => {
  const {
    classes,
    dispaySuccessNotice,
    value,
    currentPasswordChanges,
    checkPasswordFunc,
    successMessageClose,
    changeToEditView
  } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={1}>
        <form noValidate={true} autoComplete="off">
          <Grid container={true} spacing={16}>
            <Grid item={true} xs={12}>
              <Typography variant={"h5"} className={classes.secondaryHeading}>
                계정 수정
              </Typography>
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="firstName"
                name="firstName"
                label="이름"
                fullWidth={true}
                autoComplete="given-name"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                required={true}
                id="lastName"
                name="lastName"
                label="성"
                fullWidth={true}
                autoComplete="family-name"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item={true} xs={12} sm={12}>
              <TextField
                fullWidth={true}
                id="outlined-email-input"
                label="이메일 주소"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item={true} xs={12} sm={12}>
              <TextField
                fullWidth={true}
                id="outlined-email-input"
                label="이메일 다시 입력"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item={true} xs={12} sm={6}>
              <TextField
                fullWidth={true}
                id="outlined-phone-input"
                label="전화번호"
                className={classes.textField}
                inputProps={{ pattern: "^[0-9-+s()]*$" }}
                type="tel"
                name="tel"
                autoComplete="tel"
                margin="normal"
                variant="outlined"
                helperText={
                  " 전화번호는 신원확인 용도 의외로는 쓰이지 않습니다."
                }
              />
            </Grid>
            <Grid item={true} xs={12} sm={6} />
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
                label="새로운 비밀번호 다시 입력"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid className={classes.lastGridRowForEdit} item={true} xs={12}>
              <Grid className={classes.rightAlign} item={true} xs={6}>
                <TextField
                  error={value === "" ? true : false}
                  required={true}
                  id="passwordForApproval"
                  label="현재 비밀번호 입력"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                  onChange={currentPasswordChanges}
                  value={value}
                />
              </Grid>
              <Grid className={classes.childCenterAlign} item={true} xs={6}>
                <div className={classes.rightAlign}>
                  <Button onClick={changeToEditView} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={checkPasswordFunc} color="primary">
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={dispaySuccessNotice}
        onClose={successMessageClose}
        onExited={successMessageClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        autoHideDuration={6000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">계정 정보를 업데이트 하였습니다.</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={successMessageClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(AccountUserProfileEdit);
