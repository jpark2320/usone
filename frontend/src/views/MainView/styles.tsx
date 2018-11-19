import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 245;
const regionBarHeight = 81;
const appBarHeight = 56;
const drawerHeight = regionBarHeight + appBarHeight;
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    },
    bodyContainer: {
      color: "black",
      backgroundColor: "white",
      width: `calc(100% - ${drawerWidth}px)`,
      marginTop: `${drawerHeight}px`,
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: `${appBarHeight}px`,
        width: "100%"
      }
    }
  });

export default styles
