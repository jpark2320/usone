import * as React from "react";
import { listviewDispatch } from "./index";

// import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// import Checkbox from '@material-ui/core/Checkbox';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import Tooltip from "@material-ui/core/Tooltip";

// import { lighten } from '@material-ui/core/styles/colorManipulator';

import styles42 from "./styles.scss";

// import IconButton from '@material-ui/core/IconButton';

const styles: any = (theme: any) => ({
  root: {
    //  marginLeft:theme.spacing.unit * 3,
    //  marginRight:theme.spacing.unit * 3,
    //  marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  table: {},
  tableWrapper: {
    // overflowX: 'auto',
  }
});
// const toolbarStyles:any = (theme:any) => ({
//   actions: {
//       color: theme.palette.text.secondary,
//     },
//   highlight:
//   theme.palette.type === 'light'
//     ? {
//       backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//       color: theme.palette.secondary.main,
//       }
//     : {
//       backgroundColor: theme.palette.secondary.dark,
//       color: theme.palette.text.primary,
//       },
//   root: {
//     paddingRight: theme.spacing.unit,
//   },

//   spacer: {
//     flex: '1 1 100%',
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// });

// fake data
// const rows = [
//   { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
//   { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
//   { id: 'creator', numeric: true, disablePadding: false, label: 'Creator' },
//   { id: 'region', numeric: true, disablePadding: false, label: 'Region' },
//   { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
//   { id: 'like', numeric: true, disablePadding: false, label: 'Like' },
//   { id: 'view', numeric: true, disablePadding: false, label: 'View' },
//   { id: 'created_at', numeric: true, disablePadding: false, label: 'Created Time' },
// ];

const rows = [
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "title", numeric: false, disablePadding: false, label: "Title" },
  { id: "creator", numeric: false, disablePadding: false, label: "Creator" },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Created Time"
  }
];

// interfcaces
interface IListViewRecipeProps {
  data: any;
  getListdata: typeof listviewDispatch;
  botnavValue: number;
  onSelectAllClick: any;
  order: any;
  orderBy: any;
  numSelected: any;
  rowCount: any;
  classes: any;
  props: any;
  handleSelectAllClick: any;
  createSortHandler: any;
  handleRequestSort: any;
  stableSort: any;
  getSorting: any;
  isSelected: any;
  handleClick: any;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
}
interface IListViewState {
  data: any;
  numSelected: any;
  order: any;
  orderBy: any;
  page: any;
  rowCount: any;
  rowsPerPage: any;
  selected: any;
  rowsPerPageOptions: any[];
}

class Listview extends React.Component<IListViewRecipeProps, IListViewState> {
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
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.state; // selected , rowCount
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    // const { handleSelectAllClick } = this.props;
    // const { classtoolbarStyles } = toolbarStyles;

    return (
      <div>
        {/* <Paper className={classes.root}> */}
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        {/* <Toolbar
                      className={classNames(toolbarStyles.root, {
                        [toolbarStyles.highlight]: selected.length > 0,
                      })}
                    >
                      <div className={toolbarStyles.title}>
                        {selected.length > 0 ? (
                          <Typography color="inherit" variant="subtitle1" >
                            {selected.length} selected
                          </Typography>
                        ) : (
                          <Typography variant="h6" id="tableTitle">
                            게시판
                          </Typography>
                        )}
                      </div>
                      <div className={toolbarStyles.spacer} />
                      <div className={toolbarStyles.actions}>
                        {selected.length > 0 ? (
                          <Tooltip title="Delete">
                            <IconButton aria-label="Delete">
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title="Filter list">
                            <IconButton aria-label="Filter list">
                              <FilterListIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </div>
                    </Toolbar> */}
        <div id="list">
          <div className={classes.tableWrapper} style={{ display: "flex" }}>
            {/* <div id='tableCategory' style={ {verticalAlign: 'middle'}}>
                      {this.props.stableSort(data, this.props.getSorting(order, orderBy))
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((n:any) => { 
                                return (
                                  <div  key={n.id} className={styles42.sideCateogryRow}>
                                    <div className={styles42.sideCateogryCell} key={n.id}>
                                      <div className={styles42.sideCateogryPill} key={n.id}>{n.category}</div>
                                    </div>
                                  </div>
                                ) 
                              })
                      }
                    </div> */}
            <Table
              style={{}}
              className={classes.table}
              aria-labelledby="tableTitle"
            >
              {/* <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={this.props.handleSelectAllClick}
                        onRequestSort={this.props.handleRequestSort}
                        rowCount={data.length}
                        /> */}
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                                <Checkbox
                                  indeterminate={selected.length > 0 && selected.length < rowCount}
                                  checked={selected.length === rowCount}
                                  onChange={handleSelectAllClick}
                                />
                              </TableCell> */}
                  {rows.map(row => {
                    return (
                      <TableCell
                        key={row.id}
                        numeric={row.numeric}
                        padding={row.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === row.id ? order : false}
                      >
                        <Tooltip
                          title="Sort"
                          placement={
                            row.numeric ? "bottom-end" : "bottom-start"
                          }
                          enterDelay={300}
                        >
                          <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={this.props.createSortHandler(row.id)}
                          >
                            {row.label}
                          </TableSortLabel>
                        </Tooltip>
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
                        {/* <TableCell padding="checkbox">
                                    <Checkbox checked={isSelected} />
                                </TableCell> */}

                        <div
                          style={{}}
                          key={n.id}
                          className={classNames({
                            ["MuiTableCell-root-11"]: true,
                            ["MuiTableCell-body-13"]: true
                          })}
                        >
                          <div className={styles42.sideCateogryCell} key={n.id}>
                            <div
                              className={styles42.sideCateogryPill}
                              key={n.id}
                            >
                              {n.category}
                            </div>
                          </div>
                        </div>

                        {/* <TableCell padding={'none'} numeric={false} component="th" scope="row" >{n.category}</TableCell> */}
                        <TableCell component="th" scope="row" numeric={false}>
                          {n.title}[{n.view}]
                        </TableCell>
                        <TableCell numeric={false}>
                          {n.creator.firstname} {n.creator.lastname}
                        </TableCell>
                        <TableCell numeric={false}>{n.created_at}</TableCell>
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
            component="div"
            count={data.length}
            rowsPerPage={this.state.rowsPerPage}
            rowsPerPageOptions={this.state.rowsPerPageOptions}
            page={page}
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
        {/* </Paper> */}
      </div>
    );
  };

  public render() {
    return <div>{this.EnhancedTable()}</div>;
  }
}

export default withStyles(styles)(Listview);
