import { Theme } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const drawerWidth = 245;
const regionBarHeight = 79;
const appBarHeight = 70;
const drawerHeight = regionBarHeight + appBarHeight;
const AdWidth = 200;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      color: "black",
      backgroundColor: "white",
      width: `calc(100% - ${drawerWidth}px)`,
      paddingRight: `${AdWidth}px`,
      top: `${drawerHeight}px`,
      left: `${drawerWidth}px`,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        left: 0
      },
      [theme.breakpoints.down("xs")]: {
        top: `${appBarHeight}px`,
        paddingRight: 0,
        left: 0
      }
    },
    bodyContainer: {
      color: "black",
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginRight: 0
      }
    },
    tempContainerStyle: {
      marginLeft: "15%",
      marginRight: "15%",
      fontSize: "2.5rem",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "3%",
        marginRight: "3%",
        fontSize: "2rem"
      }
    },
    listViewHeader: {},
    hr: {
      border: "none",
      borderTop: " 5px solid #3CB371 ",
      overflow: "visible",
      textAlign: "center",
      color: "#3CB371",
      height: "5px"
    },
    search: {
      float: "right",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      widtbh: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit * 3,
        width: "auto"
      }
    },
    searchIcon: {
      // width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      alignItems: "center",
      justifyContent: "center"
    },

    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 4,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 200
      },

      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    toggleWhenMobile: {
      [theme.breakpoints.down("md")]: {
        color: "red"
      }
    }
  });
export default styles;
