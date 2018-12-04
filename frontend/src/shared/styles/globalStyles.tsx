import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

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
    }, // xs sm md lg xl
    bodyContainer: {
      color: "black",
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginRight: 0
      }
    },
    MainView_GridContainer: {
      flexGrow: 1
    },
    MainView__paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "none"
    },
    MainView__something: {},
    Listview__something: {},
    DetailView__something1: {},
    DetailView__something2: {}
  });

export default styles;
