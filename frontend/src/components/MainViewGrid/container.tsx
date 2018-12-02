import * as React from "react";
import MainViewGrid from "./presenter";

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

const Container = (props: any) => (
  <MainViewGrid {...props} region={props.region} boards={boards} />
);

export default Container;
