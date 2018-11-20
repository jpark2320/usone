import * as React from "react";
import SummaryBoard from "./presenter";

let id = 0;
function createData(category, title, comments) {
  id += 1;
  return { id, category, title, comments };
}

const rows = [
  createData("가전제품", "전기 포트 필요합니다.", 30),
  createData("자동차", "20009년도 중고차 찾습니다.", 29),
  createData("자동차", "20011년도 중고차 찾습니다.", 29),
  createData("음식", "아틀란타 김치 만드시는 분 찾습니다.", 13),
  createData("의류잡화", "나이키 축구화가 필요합니다.", 93),
  createData("인력", "디벨로퍼 구합니다.", 99)
];

interface IProps {
  title: string;
  rows: any;
}

interface IState {
  anchorEl: HTMLElement | null;
  mobileMoreAnchorEl: HTMLElement | null;
}

class Container extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };
  }

  public render() {
    return <SummaryBoard title={this.props.title} rows={rows} />;
  }
}

export default Container;
