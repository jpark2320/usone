import * as React from "react";
import MainViewGrid from "./presenter";

interface IProps {
  region: string;
  boards: any;
}

let id = 0;
function createboard(title, key) {
  id += 1;
  return { id, title, key };
}

const boards = [
  createboard("비자", "visa"),
  createboard("묻고답하기", "qanda"),
  createboard("렌트/룸메/서브리스", "rent"),
  createboard("Jobs", "work")
];

class Container extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps: IProps) {
    return nextProps.region !== this.props.region;
  }

  public render() {
    console.log("main view grid " + this.props.region);
    return <MainViewGrid region={this.props.region} boards={boards} />;
  }
}

export default Container;
