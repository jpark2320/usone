import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
  handleDrawerToggle: () => any;
  handleProfileMenuOpen: (event: any) => void;
  handleMenuClose: () => any;
  handleMobileMenuOpen: (event: any) => void;
  handleMobileMenuClose: () => any;
  isLoggedIn: any;
  handleLogout: () => void;
}

const PrimaryNavBar: React.SFC<IProps> = props => {
  const {
    anchorEl,
    mobileMoreAnchorEl,
    classes,
    handleDrawerToggle,
    handleProfileMenuOpen,
    handleMenuClose,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    isLoggedIn,
    handleLogout
  } = props;
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        classes={{ colorDefault: classes.PrimaryNavBar__head }}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-owns={isMenuOpen ? "material-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <RenderMenu
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <RenderMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
    </div>
  );
};

interface IrenderProps {
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const RenderMenu: React.SFC<IrenderProps> = props => {
  const {
    anchorEl,
    isMenuOpen,
    handleMenuClose,
    isLoggedIn,
    handleLogout
  } = props;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn ? (
        <div>
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/signup">Sign Up</Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );
};

interface IrenderMobileProps {
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => any;
  handleProfileMenuOpen: (event: any) => void;
}

const RenderMobileMenu: React.SFC<IrenderMobileProps> = props => {
  const {
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMobileMenuClose,
    handleProfileMenuOpen
  } = props;

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

export default withStyles(styles)(PrimaryNavBar);
