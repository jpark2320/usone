import * as React from "react";
import MainViewGrid from "./presenter";

interface IProps {
  whatthe: string;
};

interface IState {
  region: string;
};

let id = 0;
function createboard(title, keyword) {
  id += 1;
  return { id, title, keyword };
}

const boards = [
  createboard("삽니다", "sell"),
  createboard("팝니다", "buy"),
  createboard("렌트/룸메/서브리스", "house"),
  createboard("Jobs", "jobs")
];

class Container extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { region: "la" };
  }

  public render() {
    return <MainViewGrid region={this.state.region} boards={boards} />;
  }
}

export default Container;
