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

export interface IProps extends WithStyles<typeof styles> {
  region: string;
  onClickRegion: (actions: object) => void;
}

class Header extends React.Component<IProps, IState> {
  public state = {
    mobileOpen: false
  };

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes, region, onClickRegion } = this.props;
    return (
      <Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          {/* Region Nav Bar*/}
          <div className={classes.RegionNavBarContainer}>
            <RegionNavBar region={region} onClickRegion={onClickRegion} />
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
