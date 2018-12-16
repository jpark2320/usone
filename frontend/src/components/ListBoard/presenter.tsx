import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

interface IProps extends WithStyles<typeof styles> {
  order: any;
  orderBy: any;
  classes: any;
  createSortHandler: any;
  stableSort: any;
  getSorting: any;
  handleChangeRowsPerPage: any;
  handleChangePage: any;
  rows: any[];
  displayNumberOfCharacters: any;
  dynamicClassNameBasedOnLabelID: any;
  pageCounts: any[];
  handlePageSelectChange: any;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: any[];
  posts: any;
  handleFirstPageButtonClick: any;
  handleBackButtonClick: any;
  handleNextButtonClick: any;
  handleLastPageButtonClick: any;
  theme: any;
  MenuProps: object;
}

const TablePaginationActions: React.SFC<IProps> = props => {
  const {
    classes,
    posts,
    page,
    rowsPerPage,
    theme,
    handleFirstPageButtonClick,
    handleBackButtonClick,
    handleNextButtonClick,
    handleLastPageButtonClick
  } = props;

  let postsCounts;

  if (!posts) {
    postsCounts = 1;
  } else {
    postsCounts = posts.count;
  }

  return (
    <div className={classes.PaginationRoot}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 1}
        aria-label="First Page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 1}
        aria-label="Previous Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(postsCounts / rowsPerPage)}
        aria-label="Next Page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(postsCounts / rowsPerPage)}
        aria-label="Last Page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};
const ListBoard: React.SFC<IProps> = props => {
  const {
    order,
    orderBy,
    classes,
    createSortHandler,
    stableSort,
    getSorting,
    handleChangeRowsPerPage,
    handleChangePage,
    rows,
    displayNumberOfCharacters,
    dynamicClassNameBasedOnLabelID,
    pageCounts,
    handlePageSelectChange,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    posts,
    MenuProps
  } = props;

  let postsOrUndef;
  if (!posts) {
    postsOrUndef = [];
  } else {
    postsOrUndef = posts.results;
  }

  return (
    <React.Fragment>
      <div>
        <Grid item={true} xs={12}>
          <Paper className={classes.paper}>
            <div id="list" className={classes.tableContainer}>
              <div className={classes.tableWrapper}>
                <Table
                  className={classes.tableNoOverFlow}
                  aria-labelledby="tableTitle"
                >
                  <TableHead>
                    <TableRow className={classes.tableHeaderRow}>
                      {rows.map(row => {
                        return (
                          <TableCell
                            className={dynamicClassNameBasedOnLabelID(
                              row.id,
                              classes
                            )}
                            key={row.id}
                            numeric={row.numeric}
                            padding={row.disablePadding ? "none" : "default"}
                            sortDirection={orderBy === row.id ? order : false}
                          >
                            <TableSortLabel
                              hideSortIcon={true}
                              direction={order}
                              onClick={createSortHandler(row.id)}
                            >
                              {row.label}
                            </TableSortLabel>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stableSort(postsOrUndef, getSorting(order, orderBy)).map(
                      (n: any) => {
                        return (
                          <TableRow
                            style={{ borderBottom: "1px solid  #E0E0E0" }}
                            hover={true}
                            role="checkbox"
                            tabIndex={-1}
                            key={n.id}
                          >
                            <TableCell
                              padding={"none"}
                              className={classes.smallTableCell}
                            >
                              {n.id}
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.midTableCell}
                            >
                              {n.category}
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.titleCell}
                              numeric={false}
                            >
                              {displayNumberOfCharacters(n.title)}
                              <div className={classes.titleCellViewTag}>
                                [{n.view}]
                              </div>
                              <div
                                className={classes.consolidatedInfoForTitleCell}
                              >
                                <span style={{ color: "black" }}>
                                  {n.category}
                                </span>
                                <span style={{ float: "right" }}>
                                  {/* {n.created_by.email}
                                  {n.created_at}  */}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.midTableCell}
                              numeric={false}
                            >
                              {/* {n.created_by.email} */}
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.smallTableCell}
                              numeric={false}
                            >
                              {n.view}
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.smallTableCell}
                              numeric={false}
                            >
                              {n.like}
                            </TableCell>
                            <TableCell
                              padding={"none"}
                              className={classes.midTableCell}
                              numeric={false}
                            >
                              {n.created_at}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </div>
              <Grid container={true}>
                <Grid
                  className={classes.tableCurrentPagePagination}
                  item={true}
                  sm={2}
                >
                  <Typography variant={"caption"}>Page</Typography>
                  <Select
                    value={page}
                    classes={{
                      selectMenu: classes.paginationSelectFontSize
                    }}
                    onChange={handlePageSelectChange}
                    disableUnderline={true}
                    displayEmpty={true}
                    MenuProps={MenuProps}
                  >
                    {pageCounts.map(index => (
                      <MenuItem key={index} value={index}>
                        {index}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item={true} xs={12} sm={10}>
                  <TablePagination
                    classes={{
                      select: classes.paginationSelect,
                      root: classes.tablePagination,
                      actions: classes.pagenationAction,
                      caption: classes.hideWhenLessThanMobileXS
                    }}
                    component="div"
                    count={posts.count}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={rowsPerPageOptions}
                    ActionsComponent={() => (
                      <TablePaginationActions {...props} />
                    )}
                    page={page - 1}
                    labelRowsPerPage="열수"
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default withStyles(styles, { withTheme: true })(ListBoard);
