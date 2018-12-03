import React from "react";
// import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import Grid from "@material-ui/core/Grid";
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

class AccountUserPreferences extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: "korean",
      buy: false,
      sell: false,
      housing: false,
      jobs: false,
      visaqna: false,
      adqna: false
    };
  }

  public prefferedLanuagehandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  public perferredListhandleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form autoComplete="off">
          <Paper className={classes.root} elevation={1}>
            <Grid container={true} spacing={24}>
              <Grid item={true} xs={12} sm={12}>
                <Typography variant={"h5"} className={classes.secondaryHeading}>
                  유저 개인 세팅
                </Typography>
              </Grid>
              <Grid item={true} xs={12} className={classes.gridPadding}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="language-simple">사용자 언어</InputLabel>
                  <Select
                    value={this.state.language}
                    onChange={this.prefferedLanuagehandleChange}
                    inputProps={{
                      name: "language",
                      id: "language-simple"
                    }}
                  >
                    <MenuItem value={"korean"}>한국어</MenuItem>
                    <MenuItem value={"english"}>English</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <FormControl className={classes.root} component="fieldset">
                <Typography
                  style={{ fontWeight: 900 }}
                  className={classes.secondaryHeading}
                >
                  유저 관심 게시판
                </Typography>
                <FormLabel component="legend">
                  다중 선택이 가능합니다.
                </FormLabel>
                <FormGroup>
                  <Grid
                    className={classes.gridPadding}
                    item={true}
                    xs={6}
                    sm={6}
                  >
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.buy}
                          onChange={this.perferredListhandleChange("buy")}
                          value="buy"
                        />
                      }
                      label="삽니다"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.sell}
                          onChange={this.perferredListhandleChange("sell")}
                          value="sell"
                        />
                      }
                      label="팝니다"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.housing}
                          onChange={this.perferredListhandleChange("housing")}
                          value="housing"
                        />
                      }
                      label="렌트/룸메/서브리스"
                    />
                  </Grid>

                  <Grid className={classes.gridPadding} item={true} xs={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.jobs}
                          onChange={this.perferredListhandleChange("jobs")}
                          value="jobs"
                        />
                      }
                      label="Jobs"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.visaqna}
                          onChange={this.perferredListhandleChange("visaqna")}
                          value="visaqna"
                        />
                      }
                      label="비자문의"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.adqna}
                          onChange={this.perferredListhandleChange("adqna")}
                          value="adqna"
                        />
                      }
                      label="광고문의"
                    />
                    <FormHelperText>
                      선택된 게시판들이 우선적으로 홈페이지에 등장합니다.
                    </FormHelperText>
                  </Grid>
                </FormGroup>
              </FormControl>

              <Grid item={true} xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" name="optEmail" value="yes" />
                  }
                  label="개인 이메일로 최신 정보 및 댓글을 알림받습니다."
                />
              </Grid>

              <Grid item={true} className={classes.childCenterAlign} xs={12}>
                <Button
                  onClick={this.props.changeToEditView}
                  className={classes.button}
                >
                  <u>도움말</u>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AccountUserPreferences);
