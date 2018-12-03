import * as React from "react";
import DetailBoard from "./presenter";

const post = {
  category: "이민",
  title: "고민있습니다.",
  userName: "티비충",
  createdDate: "11/11/2018",
  content:
    "본론만 짧게 말씀드리면 어머니는 미국 영주권자고 저와 제 동생이 수 년 전에 초대 받았습니다. 제 동생은 미성년자일 때 초대 받아서 벌써 영주권 받고 인스테이트로 대학 다니고 있고,저는 평범하게 한국에서 대학 나와서 국내 중공업계 대기업 R& D 입사한지 얼마 안 됐습니다. 지난 달에 추가 서류 제출하라고 해서 제출하고 슬슬 영주권이 2년(?) 안에는 나올 거 같은 분위인데",
  recommended: 30,
  reported: 3,
  comments_set: [
    {
      userName: "신고할거임",
      createdDate: "11/12/2018",
      content: " 저는 좀 어렵다고 생각되네요"
    },
    {
      userName: "네네네ㅔㄴ?",
      createdDate: "11/12/2018",
      content: "희망을 가지세요"
    },
    {
      userName: "한국이 최고",
      createdDate: "11/12/2018",
      content: "저 같으면 그냥 한국에 삽니다."
    }
  ]
};

interface IProps {
  post: any;
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
    return <DetailBoard post={post} />;
  }
}

export default Container;
