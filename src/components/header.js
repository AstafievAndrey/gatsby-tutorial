import React, { Component } from 'react';

class Header extends Component {
    render(){
        const {headerText} = this.props;
        return <h1>{headerText}</h1>
    }
}

export default Header;