import * as React from "react";
import CreatePost from "./presenter";
import { Theme } from "@material-ui/core";

const tags = [
  {
    value: "ab",
    label: "LA"
  },
  {
    value: "aa",
    label: "aa"
  }
];

interface IProps {
  theme: Theme;
  category: string;
  addedPost: any;
  addPost: (
    tag: string,
    title: string,
    location: string,
    content: string,
    category: string
  ) => object;
}

class Container extends React.Component<IProps> {
  public state = {
    tag: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    content: "",
    open: false,
    snackBarOpen: false
  };

  public render() {
    const { open, snackBarOpen } = this.state;
    return (
      <CreatePost
        {...this.props}
        fullScreen={false}
        category={this.props.category}
        tags={tags}
        open={open}
        snackBarOpen={snackBarOpen}
        handleSubmit={this.handleCreatePost}
        handleClickOpen={this.handleClickOpen}
        handleClose={this.handleClose}
        snackBarHandleClose={this.snackBarHandleClose}
      />
    );
  }

  private handleClickOpen = () => {
    this.setState({ open: true });
  };

  private handleClose = () => {
    this.setState({ open: false });
  };

  private snackBarHandleClose = () => {
    this.setState({ snackBarOpen: false });
  };

  private handleCreatePost = (event: any) => {
    event.preventDefault();
    const tag = event.currentTarget.elements.tags.value;
    const title = event.currentTarget.elements.title.value;
    const location = event.currentTarget.elements.location.value;
    const content = event.currentTarget.elements.content.value;
    const category = this.props.category;

    this.props.addPost(tag, title, location, content, category);
  };
}

export default Container;
