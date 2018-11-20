import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  post: any;
  comments: any;
}

const DetailBoard: React.SFC<IProps> = props => {
  const { post, comments, classes } = props;
  const talk = "대화";
  const recommend = "추천";
  const report = "신고";

  return (
    <Card className={classes.BoardDetail__card}>
      <CardContent>
        <Typography className={classes.BoardDetail__title}>
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: classes.BoardDetail__category__button,
              label: classes.BoardDetail__category__button__label
            }}
          >
            {post.category}
          </Button>
          {post.title}[{post.recommended}]
        </Typography>
        <Divider className={classes.BoardDetail__divider} />
        <div className={classes.BoardDetail__post__username__date}>
          <Typography color="textSecondary">{post.userName}</Typography>
          <div className={classes.emptyDiv} />
          <Typography>{post.createdDate}</Typography>
        </div>
        <Typography className={classes.BoardDetail__post__content}>
          {post.content}
        </Typography>
        <Divider className={classes.BoardDetail__divider} />
        <Typography className={classes.BoardDetail__post__add__comment}>
          <Button
            variant="contained"
            color="primary"
            classes={{
              root: classes.BoardDetail__category__button,
              label: classes.BoardDetail__category__button__label
            }}
          >
            Add a comment
          </Button>
        </Typography>
        <Divider />
        <Typography>
          {comments.map(comment => (
            <div>
              <div className={classes.BoardDetail__post__username__date}>
                <Typography color="textSecondary">
                  {comment.userName}
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Typography>{comment.createdDate}</Typography>
              </div>
              <Typography>{comment.content}</Typography>
              <div className={classes.BoardDetail__post__username__date}>
                <div className={classes.emptyDiv} />
                <Button className={classes.subButton}>{talk}</Button>
                <Button className={classes.subButton}>{recommend}</Button>
                <Button className={classes.subButton}>{report}</Button>
              </div>
              <Divider />
            </div>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(DetailBoard);
