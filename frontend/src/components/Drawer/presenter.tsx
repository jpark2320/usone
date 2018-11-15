import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';
import logo from "../../logo.svg";
import { Theme } from '@material-ui/core';

export interface IamProps extends WithStyles<typeof styles> {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  firstItems: any;
  secondItems: any;
  thirdItems: any;
  theme: Theme;
  container: HTMLElement | null;
};

export const MyDrawer : React.SFC<IamProps> = (props) => {

    const { classes, firstItems, secondItems, thirdItems } = props;

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
              container={props.container}
              variant="temporary"
              anchor={props.theme.direction === 'rtl' ? 'right' : 'left'}
              open={props.mobileOpen}
              onClose={props.handleDrawerToggle}
              onOpen={props.handleDrawerToggle}
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
                    anchor={props.theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    onOpen={props.handleDrawerToggle}
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
        </nav>
    );
}

export default withStyles(styles, { withTheme: true })(MyDrawer);
