import * as React from "react";
import { Component } from "react";
import ListBoard from "./presenter";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  classes: any;
  posts: any;
}
interface IState {
  order: any;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  selected: any[];
  rowsPerPageOptions: any[];
  rows: any[];
  classes: any;
  pageCounts: any[];
}

class Container extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      order: "desc",
      orderBy: "created_at",
      page: 0,
      rowsPerPage: 2,
      rowsPerPageOptions: [2, 10, 25, 50, 100],
      selected: [],
      pageCounts: [],
      rows: [
        { id: "id", numeric: false, disablePadding: true, label: "번호" },
        { id: "category", numeric: false, disablePadding: true, label: "구분" },
        { id: "title", numeric: false, disablePadding: true, label: "제목" },
        {
          id: "creator",
          numeric: false,
          disablePadding: true,
          label: "글쓴이"
        },
        { id: "view", numeric: false, disablePadding: true, label: "조회수" },
        { id: "like", numeric: false, disablePadding: true, label: "추천" },
        {
          id: "created_at",
          numeric: false,
          disablePadding: true,
          label: "날짜"
        }
      ]
    };
  }

  public componentDidMount() {
    // get total number pagination
    const returnArray: number[] = [];
    for (
      let i = 1;
      i < this.props.posts.count / this.state.rowsPerPage + 1;
      i++
    ) {
      returnArray.push(i);
    }

    this.setState({ pageCounts: returnArray });
  }
  //
  public dynamicClassNameBasedOnLabelID = (
    id: string,
    classes: any = this.props.classes
  ) => {
    switch (id) {
      default:
        return classes.defaultTableCell;
      case "id":
        return classes.smallTableCell;
      case "category":
        return classes.midTableCell;
      case "title":
        return classes.titleCell;
      case "creator":
        return classes.midTableCell;
      case "view":
        return classes.smallTableCell;
      case "created_at":
        return classes.midTableCell;
      case "like":
        return classes.smallTableCell;
    }
  };

  // public componentDidMount() {
  //   const returnArray: number[] = [];
  //   for (
  //     let i = 1;
  //     i < this.state.data.length / this.state.rowsPerPage + 1;
  //     i++
  //   ) {
  //     returnArray.push(i);
  //   }

  //   this.setState({ pageCounts: returnArray });
  // }

  // table header func

  public displayNumberOfCharacters = (data: string) => {
    if (data.length > 60) {
      return data.slice(0, 60) + ".....";
    } else {
      return data;
    }
  };
  public createSortHandler = (property: any) => (event: any) => {
    this.handleRequestSort(event, property);
  };

  public desc(a: object, b: object, orderBy: string) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  public stableSort(array: any[], cmp: any) {
    const stabilizedThis = array.map((el: object, index: number) => [
      el,
      index
    ]);
    stabilizedThis.sort((a: object, b: object) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: object) => el[0]);
  }

  public getSorting = (order: string, orderBy: string) => {
    return order === "desc"
      ? (a: object, b: object) => this.desc(a, b, orderBy)
      : (a: object, b: object) => -1 * this.desc(a, b, orderBy);
  };

  // table func

  public handleRequestSort = (event: Event, property: string) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  public handleClick = (event: MouseEvent, id: any) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected: any[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
  };

  public handleChangePage = (event: any, page: any) => {
    this.setState({ page });
  };

  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public handlePageSelectChange = (event: any) => {
    this.setState({ page: event.target.value - 1 });
  };

  public isSelected = (id: number) => this.state.selected.indexOf(id) !== -1;

  public render() {
    const { posts } = this.props;
    return (
      <ListBoard
        {...this.state}
        dynamicClassNameBasedOnLabelID={this.dynamicClassNameBasedOnLabelID}
        displayNumberOfCharacters={this.displayNumberOfCharacters}
        createSortHandler={this.createSortHandler}
        stableSort={this.stableSort}
        getSorting={this.getSorting}
        isSelected={this.isSelected}
        handleClick={this.handleClick}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        handlePageSelectChange={this.handlePageSelectChange}
        posts={posts}
      />
    );
  }
}
export default Container;
