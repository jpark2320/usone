
import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { Typography } from '@material-ui/core';

export interface IProps extends WithStyles<typeof styles> {
  title: string;
  rows: any;
};

export const SummaryView: React.SFC<IProps> = (props) => {
  
  const { title, rows , classes} = props

  return <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {title} 
          </Typography>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return <TableRow key={row.id}>
                <TableCell >
                  {row.category}
                  {row.title}
                  {row.comments}
                </TableCell>
              </TableRow>;
          })}
        </TableBody>
      </Table>
    </Paper>;
  }

export default withStyles(styles)(SummaryView);
