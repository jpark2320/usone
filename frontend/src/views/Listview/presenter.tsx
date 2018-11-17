import * as React from "react";
// import { listviewDispatch } from "./index";
import CssBaseline from "@material-ui/core/CssBaseline";
import TableComponenet from  "../../components/TableComponenet"
import styles from  './styles';
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


export interface IListviewProps extends WithStyles<typeof styles> {

}


class Listview extends React.Component<any, IListviewProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props
    };
  }
  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.tempContainerStyle} >
          <span> 삽니다/팝니다</span>
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          <hr className = {classes.hr}/>
 
        </div>
        <TableComponenet/>
      </React.Fragment>
    )
 
  }
}

export default withStyles(styles, { withTheme: true })(Listview);


