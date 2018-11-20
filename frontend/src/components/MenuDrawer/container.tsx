import * as React from "react";
import MenuDrawer from "./presenter";

const firstItems = [
  {
    text: "HOME",
    url: "/"
  },
  {
    text: "삽니다",
    url: "/buy"
  },
  {
    text: "팝니다",
    url: "/sell"
  }
];

const secondItems = [
  {
    text: "렌트/룸메/서브리스",
    url: "/house"
  },
  {
    text: "Jobs",
    url: "/job"
  },
  {
    text: "비자문의",
    url: "/visa"
  }
];

const thirdItems = [
  {
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
