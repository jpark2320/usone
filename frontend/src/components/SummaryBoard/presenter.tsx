import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  title: string;
  summaryPosts: JSON;
}

const SummaryBoard: React.SFC<IProps> = props => {
  const { title, summaryPosts, classes } = props;
  const summaryPosts2 = typeof summaryPosts === undefined ? summaryPosts : [];
  console.log(summaryPosts);
  console.log(summaryPosts2);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {title}
          </Typography>
        </TableHead>
        <TableBody>aaa</TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SummaryBoard);
