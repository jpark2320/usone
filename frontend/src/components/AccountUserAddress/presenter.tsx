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

const AccountUserAddress: React.SFC<IProps> = props => {
  const { classes, changeToEditView } = props;
  return (
    <React.Fragment>
      <Grid container={true} spacing={24}>
        <Paper className={classes.root} elevation={1}>
          <Grid item={true} xs={6}>
            <Typography variant={"h5"} className={classes.secondaryHeading}>
              현재 사용중인 주소
            </Typography>
          </Grid>
          <Grid item={true} xs={6} className={classes.gridPadding}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              이름
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography
              style={{ width: "100%" }}
              className={classes.secondaryHeading}
            >
              백승현
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              현재 주소
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              2686 mill ct Doraville GA 30360 USA
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              도시
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              Doraville
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              주
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              GA
            </Typography>
          </Grid>
          <Grid className={classes.gridPadding} item={true} xs={6}>
            <Typography
              style={{ fontWeight: 900 }}
              className={classes.secondaryHeading}
            >
              나라
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <Typography
              style={{ font: "bold" }}
              className={classes.secondaryHeading}
            >
              USA
            </Typography>
          </Grid>
          <Grid className={classes.childCenterAlign} item={true} xs={12}>
            <Button onClick={changeToEditView} className={classes.button}>
              <u>수정하기</u>
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(AccountUserAddress);
