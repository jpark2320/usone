import * as React from "react";
import MenuDrawer from "./presenter";

const firstItems = [
  {
    id: 1,
    text: "HOME",
    url: "/"
  },
  {
    id: 2,
    text: "삽니다",
    url: "/buy"
  },
  {
    id: 3,
    text: "팝니다",
    url: "/sell"
  }
];

const secondItems = [
  {
    id: 4,
    text: "렌트/룸메/서브리스",
    url: "/house"
  },
  {
    id: 5,
    text: "Jobs",
    url: "/job"
  },
  {
    id: 6,
    text: "비자문의",
    url: "/visa"
  }
];

const thirdItems = [
  {
    id: 7,
    text: "광고문의",
    url: "/ad"
  }
];

interface IProps {
  handleDrawerToggle: () => any;
  mobileOpen: boolean;
}

interface IState {
  container: HTMLElement | null;
}

class Container extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { container: null };
  }

  public render() {
    return (
      <MenuDrawer
        {...this.props}
        {...this.state}
        firstItems={firstItems}
        secondItems={secondItems}
        thirdItems={thirdItems}
        handleDrawerToggle={this.props.handleDrawerToggle}
      />
    );
  }
}

export default Container;
