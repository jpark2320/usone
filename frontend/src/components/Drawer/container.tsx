import * as React from "react";
import MyDrawer from "./presenter";

const firstItems = [
  {
    text: 'HOME',
    url: '',
  },
  {
    text: '삽니다',
    url: '',
  },
  {
    text: '팝니다',
    url: '',
  },
];

const secondItems = [
  {
    text: '렌트/룸메/서브리스',
    url: '',
  },
  {
    text: 'Jobs',
    url: '',
  },
  {
    text: '비자문의',
    url: '',
  },
];

const thirdItems = [
  {
    text: '광고문의',
    url: '',
  }
]

interface IProps {
  handleDrawerToggle: () => any;
  mobileOpen: boolean;
};

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
      <MyDrawer
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
