import * as React from "react";
import { Component } from "react";
import ListBoard from "./presenter";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  classes: any;
  posts: any;
  dataReworkRespondforNextPages: (page_size, page) => object;
}
interface IState {
  order: any;
  orderBy: string;
  page: number;
  rowsPerPage: number;
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
      page: 1,
      rowsPerPage: 2,
      rowsPerPageOptions: [5, 10, 25, 50, 100],
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
    this.getPages();
  }

  public componentDidUpdate(prevprop, prevState) {
    if (prevprop.posts !== this.props.posts) {
      this.getPages();
    }
    if (
      this.state.page !== prevState.page ||
      prevState.rowsPerPage !== this.state.rowsPerPage
    ) {
      const { dataReworkRespondforNextPages, posts } = this.props;
      let { rowsPerPage } = this.state;
      let { page } = this.state;
      if (rowsPerPage > posts.count) {
        rowsPerPage = posts.count;
        page = 1;
        this.setState({ page: 1 });
      } else if (prevState.rowsPerPage !== this.state.rowsPerPage) {
        page = 1;
        this.setState({ page: 1 });
        rowsPerPage = this.state.rowsPerPage;
      }
      dataReworkRespondforNextPages(rowsPerPage, page);
    }
  }

  public getPages = () => {
    const returnArray: number[] = [];
    let { rowsPerPage } = this.state;
    const { posts } = this.props;
    if (rowsPerPage > posts.count) {
      rowsPerPage = posts.count;
    }
    if (posts.count / rowsPerPage > 10) {
      // returnArray.push(1);
      // for (let i = 1; i < posts.count / 10 + 1; i++) {
      //   returnArray.push((i * posts.count) / 10);
      // }
      for (let i = 1; i < posts.count / rowsPerPage + 1; i++) {
        returnArray.push(i);
      }
    } else {
      for (let i = 1; i < posts.count / rowsPerPage + 1; i++) {
        returnArray.push(i);
      }
    }

    this.setState({ pageCounts: returnArray });
  };

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

  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });

    // api rework for row per page changed. rowPerPage = limit.
  };

  public handlePageSelectChange = (event: any, page: number) => {
    if (event.target.value) {
      this.setState({ page: event.target.value });
    } else {
      this.setState({ page });
    }
  };

  public handleChangePage = (event: any, page: number = 1) => {
    // this.setState({ page });
  };

  public handleFirstPageButtonClick = event => {
    this.handlePageSelectChange(event, 1);
  };

  public handleBackButtonClick = event => {
    this.handlePageSelectChange(event, this.state.page - 1);
  };

  public handleNextButtonClick = event => {
    this.handlePageSelectChange(event, this.state.page + 1);
  };

  public handleLastPageButtonClick = event => {
    this.handlePageSelectChange(
      event,
      Math.max(1, Math.ceil(this.props.posts.count / this.state.rowsPerPage))
    );
  };

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
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        handlePageSelectChange={this.handlePageSelectChange}
        handleFirstPageButtonClick={this.handleFirstPageButtonClick}
        handleBackButtonClick={this.handleBackButtonClick}
        handleNextButtonClick={this.handleNextButtonClick}
        handleLastPageButtonClick={this.handleLastPageButtonClick}
        posts={posts}
      />
    );
  }
}
export default Container;
