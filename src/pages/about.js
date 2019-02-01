import React, { Component } from "react";
import Header from "../components/header";
import ToolbarTop from "../components/toolbar-top";
import RandomImg from "../components/random-img";

export default class About extends Component {
    render() {
        return  <div style={{color:`teal`}}>
                    <ToolbarTop />
                    <Header headerText='About GraphQL'/>
                    <p>about page</p>
                    <RandomImg />
                </div>;
    }
}