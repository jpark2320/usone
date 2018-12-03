import * as React from "react";
import MainViewGrid from "./presenter";

interface IProps {
  region: string;
  boards: any;
}

const boards = [
  {
    title: "비자",
    key: "visa"
  },
  {
    title: "묻고답하기",
    key: "qanda"
  },
  {
    title: "렌트/룸메/서브리스",
    key: "rent"
  },
  {
    title: "Jobs",
    key: "work"
  }
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
