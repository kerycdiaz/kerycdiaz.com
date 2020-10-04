import { graphql } from 'gatsby'
import React from 'react'

import Content from '@components/Content'
import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'
import SEO from '@components/Seo'

import * as GS from '../styles'

const PageTemplate = ({ data }) => {
  const page = data.markdownRemark
  const title = page.frontmatter.title
  return (
    <Layout>
      <SEO data={page} />
      <GS.TemplateWrapper>
        <PageHeader title={title} />
        <Content html={page.html} />
      </GS.TemplateWrapper>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPageBySlug($slug: String!) {
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
