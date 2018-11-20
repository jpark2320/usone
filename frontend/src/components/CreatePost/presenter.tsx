import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles";

export interface ICreatePostProps extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
}

const currencies = [
  {
    value: "팝니다",
    label: "팝니다"
  },
  {
    value: "삽니다",
    label: "삽니다"
  },
  {
    value: "렌트",
    label: "렌트"
  },
  {
    value: "리즈",
    label: "리즈"
  }
];

class CreatePost extends React.Component<ICreatePostProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      cateogry: "팝니다",
      open: false,
      title: "",
      snackBaropen: false,
      Transition: null
    };
  }

  public handleClickOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };
  public submitNewData = () => {
    this.setState({ open: false, snackBaropen: true });
  };
  public snackBarHandleClose = () => {
    this.setState({ snackBaropen: false });
  };

  public handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  public render() {
    const { fullScreen } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <Button
          className={classes.button}
          onClick={this.handleClickOpen}
          variant="outlined"
          color="primary"
          aria-label="Add"
        >
          글쓰기
        </Button>

        {/* <Fade in={this.state.open}> */}
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          disableBackdropClick={true}
        >
          <DialogTitle id="responsive-dialog-title">
            {" OOO게시판 글쓰기"}
          </DialogTitle>
          <DialogContent>
            <form
              className={classes.container}
              noValidate={true}
              autoComplete="off"
            >
              <TextField
                id="outlined-select-cateogry"
                select={true}
                label="Cateogry"
                className={classes.textField}
                value={this.state.Cateogry}
                onChange={this.handleChange("cateogry")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="카테고리를 선택해 주세요"
                margin="normal"
                variant="outlined"
              >
                {currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-title"
                label="제목"
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange("title")}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="outlined-phone-input"
                label="전화번호"
                className={classes.textField}
                inputProps={{ pattern: "^[0-9-+s()]*$" }}
                type="tel"
                name="tel"
                autoComplete="tel"
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-location-input"
                label="지역"
                className={classes.textField}
                type="location"
                name="location"
                autoComplete="State"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-price-input"
                label="가격"
                className={classes.textField}
                type="price"
                name="price"
                autoComplete="price"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="상세 내용"
                placeholder="내용을 입력 하세요..."
                multiline={true}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth={true}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.submitNewData} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={this.state.snackBaropen}
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
          message={<span id="message-id">새 게시글을 작성하였습니다.</span>}
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
      </div>
    );
  }
}
export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(CreatePost)
);
