import * as React from "react";
import DetailBoard from "./presenter";

interface IProps {
  post: any;
  deletePost: (id: number) => object;
}

class Container extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      shouldEditOpen: false
    };
  }
  public render() {
    const { post } = this.props;
    return (
      <DetailBoard
        {...this.props}
        post={post}
        shouldEditOpen={this.state.shouldEditOpen}
        handleDelelteButton={this.handleDelelteButton}
        handleEditButton={this.handleEditButton}
      />
    );
  }
  private handleDelelteButton = (id: number) => {
    this.props.deletePost(id);
  };

  private handleEditButton = () => {
    this.setState({ shouldEditOpen: !this.state.shouldEditOpen });
  };
}

export default Container;
