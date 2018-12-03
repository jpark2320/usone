import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const drawerWidth = 245;

const styles = (theme: Theme) =>
  createStyles({
    Footer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    }
  });

export default styles;
