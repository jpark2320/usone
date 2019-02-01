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
  region: string;
  createPost: (
    tag: string,
    title: string,
    region: string,
    location: string,
    description: string,
    category: string
  ) => void;
  updatePost: (
    id: number,
    tag: string,
    title: string,
    region: string,
    location: string,
    description: string,
    category: string
  ) => void;
  post?: any;
  forUpdate?: boolean;
}

class Container extends React.Component<IProps> {
  public state = {
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
        handleSubmit={this.handleCreateOrUpdatePost}
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

  private handleCreateOrUpdatePost = (event: any) => {
    event.preventDefault();
    const tag = event.currentTarget.elements.tags.value;
    const title = event.currentTarget.elements.title.value;
    const region = this.props.region;
    const location = event.currentTarget.elements.location.value;
    const description = event.currentTarget.elements.description.value;
    const category = this.props.category;

    if (this.props.forUpdate) {
      this.handleCreatePost(
        tag,
        title,
        region,
        location,
        description,
        category
      );
    } else {
      const id = this.props.post.id;
      this.handleupdatePost(
        id,
        tag,
        title,
        region,
        location,
        description,
        category
      );
    }
  };
  private handleCreatePost = (
    tag,
    title,
    region,
    location,
    description,
    category
  ) => {
    this.props.createPost(tag, title, region, location, description, category);
    this.setState({ open: false, snackBarOpen: true });
  };

  private handleupdatePost = (
    id,
    tag,
    title,
    region,
    location,
    description,
    category
  ) => {
    this.props.updatePost(
      id,
      tag,
      title,
      region,
      location,
      description,
      category
    );
    this.setState({ open: false, snackBarOpen: true });
  };
}

export default Container;
