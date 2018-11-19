import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

import BoardList from "../../components/Board";
import CreateNewItem from "../../components/CreateNewItem";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./styles";

export interface IProps extends WithStyles<typeof styles> {}

class ListView extends React.Component<IListViewProps, any> {
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
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.tempContainerStyle}>
          <div>
            삽니다/팝니다
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
          <BoardList />
          <CreateNewItem />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ListView);
