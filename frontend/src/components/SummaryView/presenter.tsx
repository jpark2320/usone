import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import styles from "./styles";

export interface IProps extends WithStyles<typeof styles> {
  title: string;
  rows: any;
}

export const SummaryView: React.SFC<IProps> = props => {
  const { title, rows, classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {title}
          </Typography>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    classes={{
                      root: classes.category__button,
                      label: classes.category__button__label
                    }}
                  >
                    {row.category}
                  </Button>
                  {row.title}[{row.comments}]
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SummaryView);
