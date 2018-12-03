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

    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: 600, // theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: 200, // 'auto'
        marginRight: 'auto',
      },
      alignItems: "center"
    },
    
    stepper: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    
    close: {
      padding: theme.spacing.unit / 2
    }
  });

export default styles;
