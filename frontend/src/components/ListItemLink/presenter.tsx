import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  primary: any;
  to: string;
  primaryStyle: any;
}

const ListItemLink: React.SFC<IProps> = props => {
  const { to, primary, primaryStyle } = props;
  const renderLink = itemProps => <Link to={to} {...itemProps} />;

  return (
    <ListItem button={true} component={renderLink} key={primary}>
      <ListItemText primary={primary} classes={primaryStyle} />
    </ListItem>
  );
};

export default withStyles(styles)(ListItemLink);
