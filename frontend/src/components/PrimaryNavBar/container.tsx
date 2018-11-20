import * as React from "react";
import PrimaryAppBar from "./presenter";

interface IProps {
  handleDrawerToggle: () => any;
}

interface IState {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
}

class Container extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };
  }

  public handleProfileMenuOpen = event => {
    this.setState(state => ({ anchorEl: event.currentTarget }));
  };

  public handleMenuClose = () => {
    this.setState(state => ({ anchorEl: null }));
    this.handleMobileMenuClose();
  };

  public handleMobileMenuOpen = event => {
    this.setState(state => ({ mobileMoreAnchorEl: event.currentTarget }));
  };

  public handleMobileMenuClose = () => {
    this.setState(state => ({ mobileMoreAnchorEl: null }));
  };
  public render() {
    return (
      <PrimaryAppBar
        {...this.state}
        handleDrawerToggle={this.props.handleDrawerToggle}
        handleProfileMenuOpen={this.handleProfileMenuOpen}
        handleMenuClose={this.handleMenuClose}
        handleMobileMenuOpen={this.handleMobileMenuOpen}
        handleMobileMenuClose={this.handleMobileMenuClose}
      />
    );
  }
}

export default Container;
