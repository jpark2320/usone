import * as React from "react";
import ListItemLink from "./presenter";

const Container = (props: any) => (
  <ListItemLink
    primary={props.primary}
    to={props.to}
    primaryStyle={props.primaryStyle}
  />
);

export default Container;
