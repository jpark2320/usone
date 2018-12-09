import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListBoard from "components/ListBoard";
import CreatePost from "components/CreatePost";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";

export interface IListViewProps extends WithStyles<typeof styles> {}

class ListView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      value: [],
      showInputBaseForMobile: false
    };
  }

  public displayInputForMobile = event => {
    this.setState({
      showInputBaseForMobile: !this.state.showInputBaseForMobile
    });
  };

  public render() {
    const { classes , category, posts} = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        {this.state.posts}
        <div className={classes.tempContainerStyle}>
          <div>
            <h1>{category}</h1>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon onClick={this.displayInputForMobile} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </div>
          <hr className={classes.hr} />
          <ListBoard posts={posts} />
          <CreatePost />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ListView);
