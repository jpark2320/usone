import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  region: string;
}

const MainViewGrid: React.SFC<IProps> = props => {
  const { classes } = props;

  return <div className={classes.Footer}>put footer text here</div>;
};

export default withStyles(styles)(MainViewGrid);
