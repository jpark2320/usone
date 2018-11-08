import  { Component } from "react";
import * as React from "react";
import Listview from "./presenter"




// interfcaces 
// interface IListViewRecipeProps {
//     data:any;
//     botnavValue:number,
//     onSelectAllClick:any,
//     order:any,
//     orderBy:any,
//     numSelected:any,
//     rowCount :any,
//     classes:any,
//     props:any


//     handleSelectAllClick:any,
//     createSortHandler:any,
//     handleRequestSort:any,
//     stableSort:any,
//     getSorting:any,
//     isSelected:any,
//     handleClick:any,
//     handleChangePage:any,
//     handleChangeRowsPerPage:any

//   }


interface IListViewState{
    data:any,
    order:any,
    orderBy:any,
    page:any
    rowsPerPage:any,
    selected: any[],
     
     

}


let counter = 0;

// test data  
// const TestData =[
//   {id:1, title:'Test List Item1 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
//   {id:2, title:'Test List Item2 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
//   {id:3, title:'Test List Item3 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
//   {id:4, title:'Test List Item4 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:{} },
// ]


class Container extends Component<any, IListViewState> {
      constructor(props:any) {
        super(props);
        this.state = {
            
            data: [
                // this.createData(TestData.title, 305, 3.7, 67, 4.3),
                // this.createData('Donut', 452, 25.0, 51, 4.9),
                // this.createData('Eclair', 262, 16.0, 24, 6.0),
                // this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                // this.createData('Gingerbread', 356, 16.0, 49, 3.9),
                // this.createData('Honeycomb', 408, 3.2, 87, 6.5),
                // this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                // this.createData('Jelly Bean', 375, 0.0, 94, 0.0),
                // this.createData('KitKat', 518, 26.0, 65, 7.0),
                // this.createData('Lollipop', 392, 0.2, 98, 0.0),
                // this.createData('Marshmallow', 318, 0, 81, 2.0),
                // this.createData('Nougat', 360, 19.0, 9, 37.0),
                // this.createData('Oreo', 437, 18.0, 63, 4.0),
                {id:1, title:'Test List Item1 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:2, title:'Test List Item2 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:3, title:'Test List Item3 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
                {id:4, title:'Test List Item4 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:{} },

                {id:11, title:'Test List Item12 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:21, title:'Test List Item22 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:31, title:'Test List Item32 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
                {id:41, title:'Test List Item42', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:{} },

                {id:12, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:22, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:3211, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
                {id:4211, title:'Test List Item43 ', description:'Fake des4',creator: {firstname:'firstname4', lastname:' lastname4'}, region:'NY',category:'Annoucement',like:1,view:4222,created_at:{} },
                {id:1211, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:2211, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:32112, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
     
                {id:121, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:221, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:321, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
        
                {id:122, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:222, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:322, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
      
                {id:123, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:223, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:323, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
        
                {id:124, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:224, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:324, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
    
                {id:125, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:225, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:325, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
      
                {id:126, title:'Test List Item13 ', description:'Fake des1',creator: {firstname:'firstname1', lastname:' lastname1'}, region:'GA',category:'sales',like:14,view:42,created_at:{} },
                {id:226, title:'Test List Item23 ', description:'Fake des2',creator: {firstname:'firstname2', lastname:' lastname2'}, region:'TX',category:'work',like:4,view:4212,created_at:{} },
                {id:326, title:'Test List Item33 ', description:'Fake des3',creator: {firstname:'firstname3', lastname:' lastname3'}, region:'VA',category:'FAQ',like:55,view:424,created_at:{} },
               
              ],
            order: 'asc',
            orderBy: 'calories',
            page: 0,
            rowsPerPage: 5,
            selected: [],
            
        }
    }



// table header func 


public createSortHandler = (property:any) => (event:any) => {
    this.handleRequestSort(event, property);
    
  };

// talbe functiosn 

public createData(name:any, calories:any, fat:any, carbs:any, protein:any) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

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

// const ListviewContainer = (props: any) => <Listview {...props} />;

export default Container; 
// export default ListviewContainer;
