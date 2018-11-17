import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import SummaryView from 'components/SummaryView';
import Divider from '@material-ui/core/Divider';

interface IProps extends WithStyles<typeof styles> {
  region: string;
  boards: any;
};

const MainViewGrid: React.SFC<IProps> = (props) => {
  const { classes, boards } = props;

  return <div className={classes.root}>
    <Grid container={true} spacing={24}>
      {boards.map( 
        board => (
          <Grid item={true} xs={12} sm={6}>
            <Divider />
            <Paper className={classes.paper}>
              <SummaryView title={board.title}/>
            </Paper>
          </Grid>
        )
      )}
    </Grid>
  </div>;
}

export default withStyles(styles)(MainViewGrid);
