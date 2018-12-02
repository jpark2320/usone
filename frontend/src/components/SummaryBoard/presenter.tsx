import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IPostPops {
  id: number;
  category: string;
  description: string;
  title: string;
  comment_set: string[];
}

interface IProps extends WithStyles<typeof styles> {
  title: string;
  summaryPosts: {
    count: number;
    next: any;
    previous: any;
    results: IPostPops[];
  };
}

const SummaryBoard: React.SFC<IProps> = props => {
  const { title, summaryPosts, classes } = props;
  const posts = summaryPosts ? summaryPosts.results : [];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {title}
          </Typography>
        </TableHead>
        <TableBody>
          {posts.map(post => {
            return (
              <TableRow key={post.id}>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    classes={{
                      root: classes.category__button,
                      label: classes.category__button__label
                    }}
                  >
                    {post.category}
                  </Button>
                  {post.title}[{post.comment_set.length}]
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SummaryBoard);
