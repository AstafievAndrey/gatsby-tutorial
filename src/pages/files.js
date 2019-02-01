import React, { Component } from "react";
import { graphql } from "gatsby"
import Header from "../components/header";
import ToolbarTop from "../components/toolbar-top";

export default class Files extends Component {
    renderTable(edges) {
        return (<table>
            <thead>
                <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
                </tr>
            </thead>
            <tbody>
                {edges.map(({ node }, index) => (
                <tr key={index}>
                    <td>{node.relativePath}</td>
                    <td>{node.prettySize}</td>
                    <td>{node.extension}</td>
                    <td>{node.birthTime}</td>
                </tr>
                ))}
            </tbody>
        </table>);
    }
    render() {
        const {edges} = this.props.data.allFile;
        return <div>
                <ToolbarTop />
                <Header headerText='Files GraphQl'/>
                {this.renderTable(edges)}
            </div>;
    }
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;