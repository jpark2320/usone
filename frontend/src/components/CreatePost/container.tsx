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
        category={"work"}
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
    const phone = event.currentTarget.elements.phone.value;
    const email = event.currentTarget.elements.email.value;
    const location = event.currentTarget.elements.location.value;
    const content = event.currentTarget.elements.content.value;

    console.log(tag);
    console.log(title);
    console.log(phone);
    console.log(email);
    console.log(location);
    console.log(content);
    this.setState({ open: false, snackBarOpen: true });
  };
}

export default Container;
