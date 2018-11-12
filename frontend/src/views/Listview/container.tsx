import  { Component } from "react";
import * as React from "react";
import Listview from "./presenter"

interface IListViewState{
    data:any,
    order:any,
    orderBy:any,
    page:any
    rowsPerPage:any,
    selected: any[],
    rowsPerPageOptions:any[]
}
// let counter = 0;

class Container extends Component<any, IListViewState> {
      constructor(props:any) {
        super(props);
        this.state = {
            
            data: [
      
                {id:1, title:'Test List Item1 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:'2018-11-21' },
                {id:2, title:'Test List Item2 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:'2018-12-04' },
                {id:3, title:'Test List Item3 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:'2018-12-12' },
                {id:4, title:'Test List Item4 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:'2018-12-13' },

                {id:11, title:'Test List Item12 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:'2018-12-26' },
                {id:21, title:'Test List Item22 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:'2018-11-12' },
                {id:31, title:'Test List Item32 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:'2018-12-10' },
                {id:41, title:'Test List Item42', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:'2018-12-14' },

                {id:12, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:'2008-12-02' },
                {id:22, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:'2016-03-17' },
                {id:3211, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:'2017-06-08' },
                {id:4211, title:'Test List Item43 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:'2017-08-10' },
                {id:1211, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:'2011-12-30' },
                {id:2211, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:'2013-07-12' },
                {id:32112, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:'2009-09-24' },
     
              ],
            order: 'desc',
            orderBy: 'created_at',
            page: 0,
            rowsPerPage: 5,
            rowsPerPageOptions:[5,25,50,100],
            selected: [],
            
        }
    }



// table header func 


public createSortHandler = (property:any) => (event:any) => {
    this.handleRequestSort(event, property);
    
  };

// talbe functiosn 

// public createData(name:any, calories:any, fat:any, carbs:any, protein:any) {
//   counter += 1;
//   return { id: counter, name, calories, fat, carbs, protein };
// }

public desc(a:any, b:any, orderBy:any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

public stableSort(array:any, cmp:any) {
  const stabilizedThis = array.map((el:any, index:any) => [el, index]);
  stabilizedThis.sort((a:any, b:any) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) {return order};
    return a[1] - b[1];
  });
  return stabilizedThis.map((el:any) => el[0]);
}

public getSorting(order:any, orderBy:any) {
  return order === 'desc' ? (a:any, b:any) => this.desc(a, b, orderBy) : (a:any, b:any) => -1*this.desc(a, b, orderBy);
}




// table func


public handleRequestSort = (event:any, property:any) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  public handleSelectAllClick = (event:any) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map((n:any) => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  public handleClick = (event:any, id:any) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected:any = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    // this.setState({ selected: newSelected });
  };

  public handleChangePage = (event:any, page:any) => {
    this.setState({ page });
  };

  public handleChangeRowsPerPage = (event:any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public isSelected = (id:any) => this.state.selected.indexOf(id) !== -1;

  public render(){

  
return (
      <Listview 
        {...this.state}
        handleSelectAllClick={this.handleSelectAllClick}
        createSortHandler={this.createSortHandler}
        handleRequestSort={this.handleRequestSort}
        stableSort={this.stableSort}
        getSorting={this.getSorting}
        isSelected={this.isSelected}
        handleClick={this.handleClick}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        desc={this.desc}

      />
  );
}
}
export default Container; 
