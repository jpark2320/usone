import React, { Fragment } from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import RegionNavBar from "components/RegionNavBar";
import MenuDrawer from "components/MenuDrawer";
import PrimaryNavBar from "components/PrimaryNavBar";
import styles from "./styles";

interface IState {
  mobileOpen: boolean;
}

export interface IProps extends WithStyles<typeof styles> {}

class Header extends React.Component<IProps, IState> {
  public state = {
    mobileOpen: false
  };

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          {/* Region Nav Bar*/}
          <div className={classes.RegionNavBarContainer}>
            <RegionNavBar />
          </div>
          {/* End Region Nav Bar*/}
          {/* Primary NavMenu*/}
          <PrimaryNavBar handleDrawerToggle={this.handleDrawerToggle} />
          {/* End Primary NavMenu*/}
        </AppBar>
        <MenuDrawer
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
