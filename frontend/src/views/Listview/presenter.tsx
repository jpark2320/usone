import * as React from "react";
// import {connect} from 'react-redux';
// import {bindActionCreators}from 'redux';
import { listviewDispatch} from './index'

 import classNames from 'classnames';

// grid 
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
 

// import PropTypes from 'prop-types';
// import listview_styles from "./styles.scss";
// import Button from "@material-ui/core/Button";
// import logo from "logo.svg";
// import {IListview} from "../../Interface/listview_Interface";


// bot nav 
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import RestoreIcon from '@material-ui/icons/Restore'; 

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import Tooltip from '@material-ui/core/Tooltip';

import { lighten } from '@material-ui/core/styles/colorManipulator';



import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';


const styles:any = (theme:any) => ({
    root: {
        marginTop: theme.spacing.unit * 3,
      width: '100%',
     
    },
    table: {
      minWidth: 1020,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  }); 



  const toolbarStyles:any = (theme:any) => ({
    actions: {
        color: theme.palette.text.secondary,
      },
    highlight:
    theme.palette.type === 'light'
      ? {
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        color: theme.palette.secondary.main,
        }
      : {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.text.primary,
        },
    root: {
      paddingRight: theme.spacing.unit,
    },
  
    spacer: {
      flex: '1 1 100%',
    },
    title: {
      flex: '0 0 auto',
    },
  });
  



// fake data 
  const rows = [
    { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
    { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
    { id: 'creator', numeric: true, disablePadding: false, label: 'Creator' },
    { id: 'region', numeric: true, disablePadding: false, label: 'Region' },
    { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
    { id: 'like', numeric: true, disablePadding: false, label: 'Like' },
    { id: 'view', numeric: true, disablePadding: false, label: 'View' },
    { id: 'created_at', numeric: true, disablePadding: false, label: 'Created Time' },
  ];
  


// interfcaces 
interface IListViewRecipeProps {
    data:any;
    getListdata: typeof listviewDispatch
    botnavValue:number,
    onSelectAllClick:any,
    order:any,
    orderBy:any,
    numSelected:any,
    rowCount :any,
    classes:any,
    props:any


    handleSelectAllClick:any,
    createSortHandler:any,
    handleRequestSort:any,
    stableSort:any,
    getSorting:any,
    isSelected:any,
    handleClick:any,
    handleChangePage:any,
    handleChangeRowsPerPage:any

  }


interface IListViewState{
    data:any,
    numSelected:any,
    order:any,
    orderBy:any,
    page:any
    rowCount :any,
    rowsPerPage:any,
    selected:any,
    
     
     

}
 


// const EnhancedTableToolbar = (props:any) => {
//     const { numSelected } = props;
//     const { classes } = toolbarStyles;
  
//     return (
//       <Toolbar
//         className={classNames(classes.root, {
//           [classes.highlight]: numSelected > 0,
//         })}
//       >
//         <div className={classes.title}>
//           {numSelected > 0 ? (
//             <Typography color="inherit" variant="subtitle1">
//               {numSelected} selected
//             </Typography>
//           ) : (
//             <Typography variant="h6" id="tableTitle">
//               Nutrition
//             </Typography>
//           )}
//         </div>
//         <div className={classes.spacer} />
//         <div className={classes.actions}>
//           {numSelected > 0 ? (
//             <Tooltip title="Delete">
//               <IconButton aria-label="Delete">
//                 <DeleteIcon />
//               </IconButton>
//             </Tooltip>
//           ) : (
//             <Tooltip title="Filter list">
//               <IconButton aria-label="Filter list">
//                 <FilterListIcon />
//               </IconButton>
//             </Tooltip>
//           )}
//         </div>
//       </Toolbar>
//     );
//   };
  // withStyles(toolbarStyles)(EnhancedTableToolbar);


  
  // const EnhancedTableHead=( props:any ) => {
  //   const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  //   return (
  //     <TableHead>
  //       <TableRow>
  //         <TableCell padding="checkbox">
  //           <Checkbox
  //             indeterminate={numSelected > 0 && numSelected < rowCount}
  //             checked={numSelected === rowCount}
  //             onChange={onSelectAllClick}
  //           />
  //         </TableCell>
  //         {rows.map(row => {
  //           return (
  //             <TableCell
  //               key={row.id}
  //               numeric={row.numeric}
  //               padding={row.disablePadding ? 'none' : 'default'}
  //               sortDirection={orderBy === row.id ? order : false}
  //             >
  //               <Tooltip
  //                 title="Sort"
  //                 placement={row.numeric ? 'bottom-end' : 'bottom-start'}
  //                 enterDelay={300}
  //               >
  //                 <TableSortLabel
  //                   active={orderBy === row.id}
  //                   direction={order}
  //                   onClick={props.createSortHandler(row.id)}
  //                 >
  //                   {row.label}
  //                 </TableSortLabel>
  //               </Tooltip>
  //             </TableCell>
  //           );
  //         },)}
  //       </TableRow>
  //     </TableHead>
  //   );
  // }


  class Listview extends React.Component<IListViewRecipeProps,IListViewState > {

    constructor(props:any) {
      super(props);
      this.state = {
        ...props,
      }
    }
    
    public UNSAFE_componentWillReceiveProps(nextProps:any){
      this.setState ({
        ...nextProps,
      })

    }
        public EnhancedTable= ()=> {
        
    
            const { classes } = this.props;
            const { data, order, orderBy, selected, rowsPerPage, page,rowCount } = this.state;
            const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
            const { handleSelectAllClick } = this.props;
            // const { classtoolbarStyles } = toolbarStyles;
            
            return (
                <Paper className={classes.root}>


                    {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

                    <Toolbar
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
                    </Toolbar>

                    <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
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
                              <TableCell padding="checkbox">
                                <Checkbox
                                  indeterminate={selected.length > 0 && selected.length < rowCount}
                                  checked={selected.length === rowCount}
                                  onChange={handleSelectAllClick}
                                />
                              </TableCell>
                              {rows.map(row => {
                                return (
                                  <TableCell
                                    key={row.id}
                                    numeric={row.numeric}
                                    padding={row.disablePadding ? 'none' : 'default'}
                                    sortDirection={orderBy === row.id ? order : false}
                                  >
                                    <Tooltip
                                      title="Sort"
                                      placement={row.numeric ? 'bottom-end' : 'bottom-start'}
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
                              },this)}
                            </TableRow>
                          </TableHead>
                        
                        <TableBody>
                        {this.props.stableSort(data, this.props.getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((n:any) => {
                            const isSelected = this.props.isSelected(n.id);
                            return (
                                <TableRow
                                hover={true}
                                onClick={this.props.handleClick(event, n.id)}
                                role="checkbox"
                                aria-checked={isSelected}
                                tabIndex={-1}
                                key={n.id}
                                selected={isSelected}
                                >
                                <TableCell padding="checkbox">
                                    <Checkbox checked={isSelected} />
                                </TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                    {n.title}
                                </TableCell>
                                <TableCell numeric={true}>{n.description}</TableCell>
                                <TableCell numeric={true}>{n.creator.firstname} {n.creator.lastname}</TableCell>
                                <TableCell numeric={true}>{n.region}</TableCell>
                                <TableCell numeric={true}>{n.category}</TableCell>
                                <TableCell numeric={true}>{n.like}</TableCell>
                                <TableCell numeric={true}>{n.view}</TableCell>
                                <TableCell numeric={true}>{}</TableCell>
                                </TableRow>
                            );
                            })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                    </Table>
                    </div>
                    <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.props.handleChangePage}
                    onChangeRowsPerPage={this.props.handleChangeRowsPerPage}
                    />
            </Paper>
        );
        }

    public render(){
      return (
      
          <li className = "list-group " style ={ {margin:'5%'}}>
              {/* {this.RenderViewlist()} */}
              {this.EnhancedTable()}
              {/* {this.CustomizedTable()} */}
              {/* {this.ListviewBottomnav()} */}
              
          </li>
      )
    }
} 



export default withStyles(styles)(Listview)

  //   EnhancedTableHead.propTypes = {
//     numSelected: PropTypes.number.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.string.isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
//   };




// EnhancedTable.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };



// function mapStateToProps(state:any){
//     return{
//         data:state.dummyData
//     }
//   }
  // function mapDispatchToProps(dispatch:any){
  //   // whenever seelcbook is called, the result should b epassed
  //   // to all of our reducers 
  //    return bindActionCreators({selectBook:selectBook}, dispatch);
  // }
  
  
  
//   export default connect(mapStateToProps)(withStyles(styles)(Listview))