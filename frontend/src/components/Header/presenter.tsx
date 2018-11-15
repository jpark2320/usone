import React, { Fragment } from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import RegionNavBar from "components/RegionNavBar";
import MyDrawer from "components/Drawer/presenter";
import PrimaryAppBar from "components/PrimaryAppBar/presenter";
import styles from "./styles";

interface IState {
  mobileOpen: boolean;
}

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
}

class Header extends React.Component<IamProps, IState> {
  public state = {
    mobileOpen: false
  };

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes, container } = this.props;
    return (
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          {/* Region Nav Bar*/}
          <div className={classes.RegionNavBarContainer}>
            <RegionNavBar />
          </div>
          {/* End Region Nav Bar*/}
          {/* Primary NavMenu*/}
          <PrimaryAppBar
            container={container}
            handleDrawerToggle={this.handleDrawerToggle}
          />
          {/* End Primary NavMenu*/}
        </AppBar>
        <MyDrawer
          container={container}
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
