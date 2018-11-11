import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';
import logo from "../../logo.svg";

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
            <SwipeableDrawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.props.mobileOpen}
              onClose={this.props.handleDrawerToggle}
              onOpen={this.props.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
            {drawer}
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown={true} implementation="css">
            <SwipeableDrawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={this.props.mobileOpen}
                    onClose={this.props.handleDrawerToggle}
                    onOpen={this.props.handleDrawerToggle}
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
        </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyDrawer);
