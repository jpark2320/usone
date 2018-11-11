import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import logo from "../../logo.svg";

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
  App__logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
    display: 'block',
    margin: 'auto',
  },
});

const firstItems = [
  {
    text: 'HOME',
    url: '',
  },
  {
    text: '삽니다',
    url: '',
  },
  {
    text: '팝니다',
    url: '',
  },
];

const secondItems = [
  {
    text: '렌트/룸메/서브리스',
    url: '',
  },
  {
    text: 'Jobs',
    url: '',
  },
  {
    text: '비자문의',
    url: '',
  },
];

const thirdItems = [
  {
    text: '광고문의',
    url:'',  
  }
]

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};

class MyDrawer extends React.Component<IamProps> {

  public state = {
    mobileOpen: false,
  };

  public render() {

    const { classes, theme } = this.props;

    const drawer = (
    <div>
      <img src={logo} className={classes.App__logo} alt="logo" />
      <Divider />
      <List>
        {firstItems.map(item => (
        <ListItem button={true} key={item.text}>
          <ListItemIcon>{<MailIcon />}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondItems.map(item => (
        <ListItem button={true} key={item.text}>
          <ListItemIcon>{<MailIcon />}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {thirdItems.map(item => (
        <ListItem button={true} key={item.text}>
          <ListItemIcon>{<MailIcon />}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
        ))}
      </List>
    </div>
    );

    return (
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden mdUp={true} implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.props.mobileOpen}
              onClose={this.props.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
            {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown={true} implementation="css">
            <Drawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open={true}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyDrawer);
