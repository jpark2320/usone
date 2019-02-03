import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles";

interface IPropsCreateOrUpdatePostModal extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
  category: string;
  tags: any[];
  snackBarOpen: boolean;
  handleSubmit: (event: any) => void;
  handleClose: () => void;
  snackBarHandleClose: () => void;
  post?: any;
  forUpdate?: boolean;
  isModalOpen: boolean;
}
interface IPost {
  title: string;
  tag: string;
  description: string;
}

const CreateOrUpdatePostModal: React.SFC<
  IPropsCreateOrUpdatePostModal
> = props => {
  const {
    fullScreen,
    category,
    classes,
    tags,
    snackBarOpen,
    handleSubmit,
    handleClose,
    snackBarHandleClose,
    isModalOpen
  } = props;
  let post: IPost = { title: "", tag: "", description: "" };

  if (props.post) {
    post = props.post;
    console.log(post);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        disableBackdropClick={true}
      >
        <DialogTitle id="responsive-dialog-title">{category}</DialogTitle>
        <DialogContent>
          <form
            className={classes.container}
            noValidate={true}
            onSubmit={handleSubmit}
          >
            <TextField
              id="tags"
              select={true}
              label="Tags"
              // value={post[0].tag}
              className={classes.textField}
              helperText="카테고리를 선택해 주세요"
              margin="normal"
              variant="outlined"
            >
              {tags.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="title"
              defaultValue={post.title}
              label="제목"
              select={false}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth={true}
            />
            <TextField
              id="phone"
              label="Phone"
              className={classes.textField}
              type="tel"
              autoComplete="tel"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="location"
              label="지역"
              className={classes.textField}
              type="location"
              name="location"
              autoComplete="State"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="price"
              label="가격"
              className={classes.textField}
              type="price"
              name="price"
              autoComplete="price"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="description"
              label="상세 내용"
              defaultValue={post.description}
              placeholder="내용을 입력 하세요..."
              multiline={true}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth={true}
            />
            <DialogActions>
              <Button type="submit">Submit</Button>
              <Button color="primary">Temporary Save</Button>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackBarOpen}
        onClose={snackBarHandleClose}
        onExited={snackBarHandleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={6000}
        ContentProps={{ "aria-describedby": "message-id" }}
        message={<span id="message-id">작업을 완료하였습니다.</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={snackBarHandleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};
export default withStyles(styles)(CreateOrUpdatePostModal);
