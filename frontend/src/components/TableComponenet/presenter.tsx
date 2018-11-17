import * as React from "react";
// import { listviewDispatch } from "./index";
import CssBaseline from "@material-ui/core/CssBaseline";

// import Paper from '@material-ui/core/Paper';
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";


import styles from "./styles";

import Grid from "@material-ui/core/Grid"

import Paper from "@material-ui/core/Paper"


// interfcaces
interface IListViewRecipeProps extends WithStyles<typeof styles>  {
  data: any[];
  // getListdata: typeof listviewDispatch;
  botnavValue: number;
  onSelectAllClick: any;
  order: any;
  orderBy: any;
  numSelected: any;
  rowCount: any;
  classes: any;
  props: any;
  createSortHandler: any;
  stableSort: any;
  getSorting: any;
  isSelected: any;
  handleClick: any;
  handleChangeRowsPerPage: any;
  handleChangePage: any;
  rows:any[];
  displayNumberOfCharacters:any,
  dynamicClassNameBasedOnLabelID:any
}
interface IListViewState {
  data: any[],
  numSelected: any,
  order: any,
  orderBy: string,
  page: number,
  rowCount: any,
  rowsPerPage: number,
  selected:  any[],
  rowsPerPageOptions: any[];
  classes:any;
  rows:any[];


}

class TableComponent extends React.Component<IListViewRecipeProps, IListViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props
    };
  }

  
  public UNSAFE_componentWillReceiveProps(nextProps: any) {
    this.setState({
      ...nextProps
    });
  }
  public EnhancedTable = () => {
    const { classes, data, order, orderBy, rowsPerPage, page, rows } = this.state; // selected , rowCount
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div className={classes.tempContainerStyle}>
      <Grid item={true} xs={12}>
        <Paper className={classes.paper}>
        <div id="list" className={classes.tableContainer} >
          <div className={classes.tableWrapper} >
            <Table
              className={classes.tableNoOverFlow}
              aria-labelledby="tableTitle"
            >
              <TableHead>
                <TableRow className={classes.tableHeaderRow}>
                  {rows.map(row => {
                    return (
                      <TableCell
                        className ={this.props.dynamicClassNameBasedOnLabelID(row.id , classes)}
                        key={row.id}
                        numeric={row.numeric}
                        padding={row.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === row.id ? order : false}
                      >
                          <TableSortLabel
                           hideSortIcon={true}
                            direction={order}
                            onClick={this.props.createSortHandler(row.id)}
                          >{row.label}
                          </TableSortLabel>
                      </TableCell>
                    );
                  }, this)}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props
                  .stableSort(data, this.props.getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n: any) => {
                    const isSelected = this.props.isSelected(n.id);
                    return (
                      <TableRow
                        style={{ borderBottom: "1px solid  #E0E0E0" }}
                        hover={true}
                        onClick={this.props.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell padding={'none'} className={classes.smallTableCell}>{n.id}</TableCell>
                        <TableCell padding={'none'} className = {classes.midTableCell} >{n.category}</TableCell>
                        <TableCell padding={'none'} className={classes.titleCell}numeric={false}>{this.props.displayNumberOfCharacters(n.title)}
                          <div className ={classes.titleCellViewTag}>[{n.view}]</div>
                          <div className ={classes.consolidatedInfoForTitleCell}><span style={{color:'black'}}>{n.category}</span><span style={{float:'right'}}>{n.nickname}{n.created_at}</span></div>
                        </TableCell>
                        <TableCell padding={'none'} className ={classes.midTableCell} numeric={false}> {n.nickname}</TableCell>
                        <TableCell padding={'none'} className={classes.smallTableCell} numeric={false}>{n.view}</TableCell>
                        <TableCell padding={'none'} className={classes.smallTableCell} numeric={false}>{n.like}</TableCell>
                        <TableCell padding={'none'} className={classes.midTableCell} numeric={false}>{n.created_at}</TableCell>
                      </TableRow>
                    );
                  })}
                {/* {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )} */}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            classes={{ 
              select: classes.paginationSelect,
              root: classes.tablePagination,
              actions:classes.pagenationAction,
              caption:classes.hideWhenLessThanMobileXS,
            }}
            component="div"
            count={data.length}
            rowsPerPage={this.state.rowsPerPage}
            rowsPerPageOptions={this.state.rowsPerPageOptions}
            page={page}
            labelRowsPerPage='열수'
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.props.handleChangePage}
            onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
          />
        </div>
        </Paper>
        </Grid>
        </div>
    );
  };

  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.EnhancedTable()}
      </React.Fragment>
    )
 
  }
}

export default withStyles(styles, { withTheme: true })(TableComponent);


