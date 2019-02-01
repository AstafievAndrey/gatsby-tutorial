import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Posts extends Component {
    render() {
        console.log(this.props);
        const { markdownRemark } = this.props.data;
        return <React.Fragment>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </React.Fragment>;
    }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;