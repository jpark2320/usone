import * as React from "react";
import App from "./presenter";

interface IProps {
  location: Location;
}

const Container: React.SFC<IProps> = props => {
  return <App {...props} />;
};

export default Container;
