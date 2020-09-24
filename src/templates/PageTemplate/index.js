import { graphql } from 'gatsby'
import React from 'react'

import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'
import SEO from '@components/seo'

import * as GS from '../styles'

const PageTemplate = ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <SEO title="All posts" />
      <GS.TemplateWrapper>
        <PageHeader title={page.frontmatter.title} />
        <GS.ContentWrapper html={page.html} />
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
