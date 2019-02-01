import React from "react"
import Header from "../components/header";
import ToolbarTop from "../components/toolbar-top";
import RandomImg from "../components/random-img";

export default () =>{
    return  <div style={{color:`purple`}}>
                <ToolbarTop />
                <Header headerText="Hello Gatsby">wewer</Header>
                <p>index page</p>
                <RandomImg />
            </div>
} 
