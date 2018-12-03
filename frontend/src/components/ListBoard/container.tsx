import { Component } from "react";
import * as React from "react";
import ListBoard from "./presenter";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IProps extends WithStyles<typeof styles> {
  classes: any;
}
interface IState {
  data: any[];
  order: any;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  selected: any[];
  rowsPerPageOptions: any[];
  rows: any[];
  classes: any;
}
// let counter = 0;

class Container extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...props,
      data: [
        {
          id: 1,
          title:
            "Test List Item1 title over 30 letters asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd ",
          nickname: "나플라 ",
          description: "Fake des1",
          creator: { firstname: "firstname1", lastname: " lastname1" },
          region: "GA",
          category: "팝니다",
          like: 14,
          view: 42,
          created_at: "2018-11-21"
        },
        {
          id: 2,
          title: "Test List Item2 ",
          description: "Fake des2",
          nickname: "루피 ",
          creator: { firstname: "firstname2", lastname: " lastname2" },
          region: "TX",
          category: "팝니다",
          like: 4,
          view: 4212,
          created_at: "2018-12-04"
        },
        {
          id: 3,
          title: "Test List Item3 ",
          description: "Fake des3",
          nickname: "키밀리 ",
          creator: { firstname: "firstname3", lastname: " lastname3" },
          region: "VA",
          category: "팝니다",
          like: 55,
          view: 424,
          created_at: "2018-12-12"
        },
        {
          id: 4,
          title: "Test List Item4 ",
          description: "Fake des4",
          nickname: "양홍원 ",
          creator: { firstname: "firstname4", lastname: " lastname4" },
          region: "NY",
          category: "삽니다",
          like: 1,
          view: 4222,
          created_at: "2018-12-13"
        },

        {
          id: 11,
          title: "Test List Item12 ",
          description: "Fake des1",
          nickname: "슈퍼비 ",
          creator: { firstname: "firstname1", lastname: " lastname1" },
          region: "GA",
          category: "삽니다",
          like: 14,
          view: 42,
          created_at: "2018-12-26"
        },
        {
          id: 21,
          title: "Test List Item22 ",
          description: "Fake des2",
          nickname: "면도 ",
          creator: { firstname: "firstname2", lastname: " lastname2" },
          region: "TX",
          category: "삽니다",
          like: 4,
          view: 4212,
          created_at: "2018-11-12"
        },
        {
          id: 31,
          title: "Test List Item32 ",
          description: "Fake des3",
          nickname: "비와이",
          creator: { firstname: "firstname3", lastname: " lastname3" },
          region: "VA",
          category: "삽니다",
          like: 55,
          view: 424,
          created_at: "2018-12-10"
        },
        {
          id: 41,
          title: "Test List Item42",
          description: "Fake des4",
          nickname: "지아코 ",
          creator: { firstname: "firstname4", lastname: " lastname4" },
          region: "NY",
          category: "팝니다",
          like: 1,
          view: 4222,
          created_at: "2018-12-14"
        },

        {
          id: 12,
          title: "Test List Item13 ",
          description: "Fake des1",
          nickname: "나플라 ",
          creator: { firstname: "firstname1", lastname: " lastname1" },
          region: "GA",
          category: "팝니다",
          like: 14,
          view: 42,
          created_at: "2008-12-02"
        },
        {
          id: 22,
          title: "Test List Item23 ",
          description: "Fake des2",
          nickname: "루피 ",
          creator: { firstname: "firstname2", lastname: " lastname2" },
          region: "TX",
          category: "팝니다",
          like: 4,
          view: 4212,
          created_at: "2016-03-17"
        },
        {
          id: 3211,
          title: "Test List Item33 ",
          description: "Fake des3",
          nickname: "창모",
          creator: { firstname: "firstname3", lastname: " lastname3" },
          region: "VA",
          category: "팝니다",
          like: 55,
          view: 424,
          created_at: "2017-06-08"
        },
        {
          id: 4211,
          title: "Test List Item43 ",
          description: "Fake des4",
          nickname: "나플라 ",
          creator: { firstname: "firstname4", lastname: " lastname4" },
          region: "NY",
          category: "팝니다",
          like: 1,
          view: 4222,
          created_at: "2017-08-10"
        },
        {
          id: 1211,
          title: "Test List Item13 ",
          description: "Fake des1",
          nickname: "수프림 ",
          creator: { firstname: "firstname1", lastname: " lastname1" },
          region: "GA",
          category: "삽니다",
          like: 14,
          view: 42,
          created_at: "2011-12-30"
        },
        {
          id: 2211,
          title: "Test List Item23 ",
          description: "Fake des2",
          nickname: "마미손 ",
          creator: { firstname: "firstname2", lastname: " lastname2" },
          region: "TX",
          category: "팝니다",
          like: 4,
          view: 4212,
          created_at: "2013-07-12"
        },
        {
          id: 32112,
          title: "Test List Item33 ",
          description: "Fake des3",
          nickname: "나플라 ",
          creator: { firstname: "firstname3", lastname: " lastname3" },
          region: "VA",
          category: "삽니다",
          like: 55,
          view: 424,
          created_at: "2009-09-24"
        }
      ],
      order: "desc",
      orderBy: "created_at",
      page: 0,
      rowsPerPage: 10,
      rowsPerPageOptions: [5, 10, 25, 50, 100],
      selected: [],
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

  public desc(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  public stableSort(array: any[], cmp: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
  }

  public getSorting(order: any, orderBy: any) {
    return order === "desc"
      ? (a: any, b: any) => this.desc(a, b, orderBy)
      : (a: any, b: any) => -1 * this.desc(a, b, orderBy);
  }

  // table func

  public handleRequestSort = (event: any, property: any) => {
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

    // this.setState({ selected: newSelected });
  };

  public handleChangePage = (event: any, page: any) => {
    this.setState({ page });
  };

  public handleChangeRowsPerPage = (event: any) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public isSelected = (id: number) => this.state.selected.indexOf(id) !== -1;

  public render() {
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
        desc={this.desc}
      />
    );
  }
}
export default Container;
