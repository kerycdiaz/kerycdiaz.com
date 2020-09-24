import { graphql } from 'gatsby'
import React, { Component } from 'react'

import Layout from '@components/Layout'
import PostHeader from '@components/PostHeader'
import SEO from '@components/seo'

import * as GS from '../styles'

class BlogPostTemplate extends Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.markdownRemark
    const title = post.frontmatter.title
    const description = post.frontmatter.description || post.excerpt
    const date = post.frontmatter.date
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={title} description={description} />
        <GS.TemplateWrapper>
          <PostHeader title={title} subTitle={description} date={date} />
          <GS.ContentWrapper html={post.html} />
        </GS.TemplateWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
