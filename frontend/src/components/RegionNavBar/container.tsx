import * as React from "react";
import RegionNavBar from "./presenter";

const images = [
    {
        url: require('images/city/la.jpg'),
        title: 'LA',
        width: '25%',
    },
    {
        url: require('images/city/seattle.jpg'),
        title: 'Seattle',
        width: '25%',
    },
    {
        url: require('images/city/atlanta.jpg'),
        title: 'Atlanta',
        width: '25%',
    },
    {
        url: require('images/city/newyork.jpg'),
        title: 'New York',
        width: '25%',
    }
];

const Container = (props: any) => <RegionNavBar images = {images} />;

export default Container;
