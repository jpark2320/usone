import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

// import TextField from "@material-ui/core/TextField";

import styles from "../styles";
import {
  withMobileDialog,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button
} from "@material-ui/core";
import InformationForm from "./presenterOld";
import AgreementPresenter from './agreementPresenterOld';

export interface IRegisterProps extends WithStyles<typeof styles> {
  theme: Theme;
  fullScreen: boolean;
}

const steps = ["Disclaimer", "Personal INformation", "Confirmation"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AgreementPresenter />;
    case 1:
      return <InformationForm />;
    case 2:
      return <InformationForm />;
    default:
      throw new Error("Unknown step");
  }
}

class ContainerOld extends React.Component<IRegisterProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  public render() {
    const { activeStep } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <React.Fragment>
          <AppBar
            position="absolute"
            color="default"
            className={classes.appBar}
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap={true}>
                USOne
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Registration Form
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom={true}>
                      Thank you for joining USOne.
                    </Typography>
                    <Typography variant="subtitle1">
                      Welcome to the Family !!!
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Finish"
                          : "Next"}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      </div>


    );
  }

  private handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  private handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  //   private handleReset = () => {
  //     this.setState({
  //       activeStep: 0
  //     });
  //   };
}
export default withMobileDialog({ breakpoint: "sm" })(
  withStyles(styles)(ContainerOld)
);
