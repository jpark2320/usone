import React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import RegionNaviBar from '../../components/RegionNaviBar/presenter';
import MyDrawer from '../../components/Drawer/presenter';
import styles from './styles';

interface IState {
  mobileOpen: boolean;
};

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;
  container: Element;
};

class Header extends React.Component<IamProps, IState> {

  public state = {
    mobileOpen: false,
  };

  public handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {

    const { classes, container } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          {/* Region Navi Bar*/}
          <div className={classes.RegionNaviBarContainer}>
            <RegionNaviBar />
          </div>
          {/* End Region Navi Bar*/}
          {/* Primary NaviMenu*/}
          <Toolbar>
            <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap={true}>
              Responsive drawer
            </Typography>
          </Toolbar>
          {/* End Primary NaviMenu*/}
        </AppBar>
        <MyDrawer 
          container={container} 
          handleDrawerToggle={this.handleDrawerToggle} 
        mobileOpen={this.state.mobileOpen} />
    </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
