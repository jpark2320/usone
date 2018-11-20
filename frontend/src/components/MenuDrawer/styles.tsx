import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const drawerWidth = 245;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: "#6c5b7b"
    },
    drawer__menu__text: {
      color: "white",
      textAlign: "center"
    },
    RegionNaviBarContainer: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "contents",
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    appBar: {
      color: "black",
      backgroundColor: "white",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    App__logo: {
      animation: "App-logo-spin infinite 20s linear",
      display: "block",
      width: "100%",
      backgroundColor: "#6c5b7b",
      padding: "20px",
      height: "135px"
    },
    paperAnchorDockedLeft: {
      borderRight: "none"
    },
    divider: {
      backgroundColor: "#999999",
      marginRight: 24,
      marginLeft: 24
    }
  });

export default styles;
