import * as React from "react";
import RegionNavBar from "./presenter";

const images = [
  {
    url: require("assets/images/city/la.jpg"),
    title: "LA",
    width: "25%",
    key: "los-angeles"
  },
  {
    url: require("assets/images/city/seattle.jpg"),
    title: "Seattle",
    width: "25%",
    key: "seattle"
  },
  {
    url: require("assets/images/city/atlanta.jpg"),
    title: "Atlanta",
    width: "25%",
    key: "georgia"
  },
  {
    url: require("assets/images/city/newyork.jpg"),
    title: "New York",
    width: "25%",
    key: "new-york"
  }
];

const Container = (props: any) => <RegionNavBar {...props} images={images} />;

export default Container;
