import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    BoardDetail__card: {
      minWidth: 275
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    BoardDetail__title: {
      marginBottom: 10
    },
    BoardDetail__category__button: {
      minWidth: 33,
      marginRight: "10px",
      backgroundColor: "#d8d8d8",
      color: "black",
      padding: "6px",
      minHeight: "28px"
    },
    BoardDetail__divider: {
      height: 3
    },
    BoardDetail__category__button__label: {},
    BoardDetail__post__username__date: {
      marginTop: 10,
      marginBottom: 10,
      display: "flex"
    },
    BoardDetail__post__content: {
      marginBottom: 10
    },
    BoardDetail__post__add__comment: {
      marginTop: 15,
      marginBottom: 15
    },
    emptyDiv: {
      flexGrow: 1
    },
    subButton: {
      minWidth: 40,
      padding: "8 8"
    }
  });

export default styles;
