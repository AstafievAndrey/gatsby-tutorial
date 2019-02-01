import React, { Component } from 'react';
import {graphql, Link} from 'gatsby';
import ToolbarTop from '../components/toolbar-top';

export default class Markdown extends Component {
    render() {
        const {edges} = this.props.data.allMarkdownRemark;
        console.log(edges);
        return <React.Fragment>
            <ToolbarTop />
            <div style={{margin: `10px auto`, width: `80%`}}>
                {edges.map((item, index) => {
                    console.log(item);
                    return (<div key={index}>
                                <h4>{item.node.frontmatter.title}</h4>
                                <p>{item.node.excerpt}</p>
                                <Link to={item.node.fields.slug}>перейти</Link>
                            </div>);
                })}
            </div>
        </React.Fragment>;
    }
}

export const query = graphql`
query{
    allMarkdownRemark{
        edges{
          node{
            id
            fields {
                slug
            }
            frontmatter{
              title
              date(formatString: "DD MMMM, YYYY")
                custom
            }
            excerpt
            html
          }
        }
      }
}`;