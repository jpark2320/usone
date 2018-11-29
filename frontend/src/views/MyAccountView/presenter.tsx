import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles"; 

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwipeableViews from 'react-swipeable-views';


import UserProfile from '../../components/Account/UserProfile'
import UserInfoEdit from '../../components/Account/UserInfoEdit'

export interface IamProps extends WithStyles<typeof styles> {
  theme: Theme;

  // container: Element;
}


// function TabContainer({ children, dir }) {
//   return (
//     <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//       {children}
//     </Typography>
//   );
// }




class MainView2 extends React.Component<IamProps,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: null,
      check:true,
      value: 0,
    };
  }
  public handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  public changeToEditView = (event, value) => {
    this.setState({ value:2 });
  };


  public handleChangeIndex = index => {
    this.setState({ value: index });
  };

  public render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const { theme } = this.props

    return (


      <div className={classes.tempContainerStyle}>
            <h1> My Account</h1>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>계정</div>
          <div className={classes.secondaryHeading}>유저계정을 열람 및 수정합니다.</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
         <UserInfoEdit/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>주소</Typography>
          <Typography className={classes.secondaryHeading}>
            유저의 주소를 열람 및 수정합니다.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          animateHeight={true}
        >
          {this.state.check?
          <UserProfile  index={1} changeToEditView={this.changeToEditView} dir={theme.direction} onChange={this.handleChange}/>:
          <UserInfoEdit index={2} dir={theme.direction} onChange={this.handleChange}/>}
         </SwipeableViews>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
            eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
            eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainView2);
