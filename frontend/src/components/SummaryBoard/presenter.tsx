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

interface IProps extends WithStyles<typeof styles> {
  title: string;
  posts: any;
}

const SummaryBoard: React.SFC<IProps> = props => {
  const { title, classes, posts } = props;

  let postsOrUndef;
  if (!posts) {
    postsOrUndef = [];
  } else {
    postsOrUndef = posts.results;
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {title}
          </Typography>
        </TableHead>
        <TableBody>
          {postsOrUndef.map(post => {
            return (
              <TableRow key={post.id}>
                <TableCell>
                  {post.tag && (
                    <Button
                      variant="contained"
                      color="primary"
                      classes={{
                        root: classes.category__button,
                        label: classes.category__button__label
                      }}
                    >
                      {post.tag}
                    </Button>
                  )}
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
