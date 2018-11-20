import React, { Fragment } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import logo from "images/logo/logo_rectangle.svg";
import { Theme } from "@material-ui/core";
import styles from "./styles";

export interface IamProps extends WithStyles<typeof styles> {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  firstItems: any;
  secondItems: any;
  thirdItems: any;
  theme: Theme;
  container: HTMLElement | null;
}

export const MenuDrawer: React.SFC<IamProps> = props => {
  const { classes, firstItems, secondItems, thirdItems } = props;

  const drawer = (
    <Fragment>
      <img src={logo} className={classes.App__logo} alt="logo" />
      <Divider classes={{ root: classes.divider }} />
      <List>
        {firstItems.map(item => (
          <ListItem button={true} key={item.text}>
            <ListItemText
              classes={{ primary: classes.drawer__menu__text }}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
      <Divider classes={{ root: classes.divider }} />
      <List>
        {secondItems.map(item => (
          <ListItem button={true} key={item.text}>
            <ListItemText
              classes={{ primary: classes.drawer__menu__text }}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
      <Divider classes={{ root: classes.divider }} />
      <List>
        {thirdItems.map(item => (
          <ListItem button={true} key={item.text}>
            <ListItemText
              classes={{ primary: classes.drawer__menu__text }}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swap with js to avoid SEO duplication of links. */}
      <Hidden mdUp={true} implementation="css">
        <SwipeableDrawer
          container={props.container}
          variant="temporary"
          anchor={props.theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          onOpen={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.paperAnchorDockedLeft
          }}
          ModalProps={
            { keepMounted: true } // Better open performance on mobile.
          }
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown={true} implementation="css">
        <SwipeableDrawer
          classes={{
            paper: classes.drawerPaper,
            paperAnchorDockedLeft: classes.paperAnchorDockedLeft
          }}
          variant="permanent"
          anchor={props.theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          onOpen={props.handleDrawerToggle}
        >
          {drawer}
        </SwipeableDrawer>
      </Hidden>
    </nav>
  );
};

export default withStyles(styles, { withTheme: true })(MenuDrawer);
