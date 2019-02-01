import React, { Component } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

class ToolbarTop extends Component {
    renderStaticQuery() {
        return <StaticQuery 
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            linkName,
                            linkRef
                        }
                    }
                }
            `}
            render={data => {
                const {linkName, linkRef} = data.site.siteMetadata;
                    return (
                        <React.Fragment>
                            {
                            linkName.map((item, index)=>{
                                return <Link key={index} to={`${linkRef[index]}`} >{item}</Link>
                            })
                            }
                        </React.Fragment>
                    )
                }
            }
        />
    }
    render() {
        return  <div style={{background: `whitesmoke`, padding: `10px`}}>
                    {this.renderStaticQuery()}
                </div>
    }
}

export default ToolbarTop;