import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import SummaryBoard from "components/SummaryBoard";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  region: string;
  boards: any;
}

const MainViewGrid: React.SFC<IProps> = props => {
  const { classes, boards } = props;

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={24}>
        {boards.map(board => (
          <Grid key={board.id} item={true} xs={12} sm={6}>
            <Paper className={classes.paper}>
              <SummaryBoard title={board.title} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MainViewGrid);
