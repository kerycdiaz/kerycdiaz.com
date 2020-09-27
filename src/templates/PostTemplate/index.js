import { graphql } from 'gatsby'
import React from 'react'

import Content from '@components/Content'
import Layout from '@components/Layout'
import PostHeader from '@components/PostHeader'
import SEO from '@components/Seo'

import * as GS from '../styles'

const PostTemplate = ({ data, location }) => {
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
        <Content html={post.html} />
      </GS.TemplateWrapper>
    </Layout>
  )
}

export default PostTemplate

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
