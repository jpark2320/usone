import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const drawerWidth = 245;

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  RegionNaviBarContainer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'contents',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  appBar: {
        color: 'black',
        backgroundColor: 'white',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
});

export default styles;
