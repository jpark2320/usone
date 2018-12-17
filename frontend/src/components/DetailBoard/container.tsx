import * as React from "react";
import DetailBoard from "./presenter";

interface IProps {
  post: any;
}

const Container: React.SFC<IProps> = props => {
  const { post } = props;
  return <DetailBoard {...props} post={post} />;
};

export default Container;
