import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

export interface IProps extends WithStyles<typeof styles> {
  rows: any;
};

export const SummaryView: React.SFC<IProps> = (props) => {
  
  const { rows , classes} = props

  return <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>카테고리</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>코멘트</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric={true}>{row.category}</TableCell>
                <TableCell numeric={true}>{row.title}</TableCell>
              <TableCell numeric={true}>{row.comments}</TableCell>
              </TableRow>;
          })}
        </TableBody>
      </Table>
    </Paper>;
  }

export default withStyles(styles)(SummaryView);
