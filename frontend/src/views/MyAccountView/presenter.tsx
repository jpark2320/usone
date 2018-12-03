import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import SwipeableViews from 'react-swipeable-views';

import UserAddress from "../../components/Account/UserAddress";
import UserAddressEdit from "../../components/Account/UserAddressEdit";
import UserProfile from "../../components/Account/UserProfile";
import UserProfileEdit from "../../components/Account/UserProfileEdit";
import UserPreferences from "../../components/Account/UserPreferences";

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;

  // container: Element;
}

class MyAccountView extends React.Component<IamProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: null,
      openEditProfile: true,
      openEditAddress: true,
      value: 0
    };
  }
  public handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  public changeToEditAddressView = (event, value) => {
    this.setState({ openEditAddress: !this.state.openEditAddress });
  };
  public changeToEditProfileView = (event, value) => {
    this.setState({ openEditProfile: !this.state.openEditProfile });
  };

  public handleChangeIndex = index => {
    this.setState({ value: index });
  };

  public render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    // const { theme } = this.props

    return (
      <div className={classes.tempContainerStyle}>
        <h1> My Account</h1>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.heading}>계정</div>
            <div className={classes.secondaryHeading}>
              유저계정을 열람 및 수정합니다.
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.openEditProfile ? (
              <UserProfile changeToEditView={this.changeToEditProfileView} />
            ) : (
              <UserProfileEdit
                changeToEditView={this.changeToEditProfileView}
              />
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>주소</Typography>
            <Typography className={classes.secondaryHeading}>
              유저의 주소를 열람 및 수정합니다.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.state.openEditAddress ? (
              <UserAddress changeToEditView={this.changeToEditAddressView} />
            ) : (
              <UserAddressEdit
                changeToEditView={this.changeToEditAddressView}
              />
            )}
            {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          animateHeight={true}
        >

          <UserProfile  index={1} changeToEditView={this.changeToEditView} dir={theme.direction} onChange={this.handleChange}/>
          <UserInfoEdit index={2} dir={theme.direction} onChange={this.handleChange}/>
          <UserInfoEdit index={2} dir={theme.direction} onChange={this.handleChange}/>
          <UserInfoEdit index={2} dir={theme.direction} onChange={this.handleChange}/>
        
         </SwipeableViews> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>유저 세팅</Typography>
            <Typography className={classes.secondaryHeading}>
              유저세팅을 열람 및 수정합니다.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UserPreferences />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>유저 기록</Typography>
            <Typography className={classes.secondaryHeading}>
              유저가 쓴 글을 조회 및 수정합니다.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>차후에 업데이트 됩니다 기다리세요.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyAccountView);
