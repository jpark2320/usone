import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

interface IProps {
  classes: any;
  changeToEditView: any;
}

const AccountUserProfile: React.SFC<IProps> = props => {
  const { classes, changeToEditView } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={1}>
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12}>
            <Typography variant={"h5"} className={classes.secondaryHeading}>
              계정 정보
            </Typography>
          </Grid>
          <Grid item={true} xs={6} className={classes.gridPadding}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              성
            </Typography>
            <Typography className={classes.secondaryHeading}>백</Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              이름
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              승현
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              이메일 주소
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              poolpnd@hotmail.com
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              핸드폰 번호
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              (404)-695-5014
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              생년월일
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              1990/9/25
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              성별
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              남자
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              비밀번호
            </Typography>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              ********
            </Typography>
          </Grid>
          <Grid item={true} className={classes.childCenterAlign} xs={12}>
            <Button onClick={changeToEditView} className={classes.button}>
              <u>수정하기</u>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(AccountUserProfile);
