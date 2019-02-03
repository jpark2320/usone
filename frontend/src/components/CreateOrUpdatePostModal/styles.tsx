import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 180,
      color: "red"
    },
    paper: {
      margin: theme.spacing.unit
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    },
    button: {
      margin: theme.spacing.unit,
      float: "right"
    },

    displayWhenMobile: {
      display: "none",

      [theme.breakpoints.down("md")]: {
        display: "inline-block"
      }
    },
    hideWhenMobile: {
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    },
    close: {
      padding: theme.spacing.unit / 2
    }
  });

export default styles;
