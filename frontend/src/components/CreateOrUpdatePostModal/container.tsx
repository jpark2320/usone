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
  isModalOpen: boolean;
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
  handleParentModalState: any;
}

class Container extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      isModalOpen: this.props.isModalOpen,
      snackBarOpen: false
    };
  }

  public render() {
    const { isModalOpen, snackBarOpen } = this.state;
    return (
      <CreatePost
        {...this.props}
        fullScreen={false}
        category={this.props.category}
        tags={tags}
        isModalOpen={isModalOpen}
        snackBarOpen={snackBarOpen}
        handleSubmit={this.handleCreateOrUpdatePost}
        handleClose={this.handleClose}
        snackBarHandleClose={this.snackBarHandleClose}
      />
    );
  }

  private handleClose = () => {
    this.setState({ isModalOpen: false });
    this.props.handleParentModalState();
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

    if (!this.props.forUpdate) {
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
    this.setState({ isModalOpen: false, snackBarOpen: true });
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
    this.setState({ isModalOpen: false, snackBarOpen: true });
  };
}

export default Container;
