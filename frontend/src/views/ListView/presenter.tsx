import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListBoard from "components/ListBoard";
import CreatePost from "components/CreatePost";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";

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
    const { classes, category, posts } = this.props;

    return (
      <div className={classes.root}>
        {/* Main */}
        <main className={classes.bodyContainer}>
          <React.Fragment>
            <CssBaseline />
            <div className={classes.tempContainerStyle}>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <Typography>{category} </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon onClick={this.displayInputForMobile} />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              </div>
              <hr className={classes.hr} />
              {posts ? <ListBoard posts={posts} /> : ""}
              {/* <ListBoard posts={posts} /> */}
              <CreatePost category={category} />
            </div>
          </React.Fragment>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ListView);
