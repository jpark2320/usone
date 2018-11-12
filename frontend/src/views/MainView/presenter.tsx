import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Header from '../../components/Header/presenter';
import styles from './styles';

export interface IamProps extends WithStyles<typeof styles> {
    theme: Theme;
    container: Element;
};

class MainView extends React.Component<IamProps> {

   public render() {
        const { classes, container } = this.props;

        return (
            <div className={classes.root}>
            <CssBaseline />
            <Header container={container}/>
        {/* Main */}
            <main className={classes.content}>
              <div className={classes.toolbar} />
            
            </main>
        {/* End Main */}
          </div>
        );
  }
}

export default withStyles(styles, { withTheme: true })(MainView);
