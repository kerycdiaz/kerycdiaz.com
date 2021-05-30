import { graphql } from 'gatsby'
import React from 'react'

import ActionsBar from '@components/ActionsBar'
import Content from '@components/Content'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Layout from '@components/Layout'
import Navigator from '@components/Navigator'
import PageHeader from '@components/PageHeader'
import Seo from '@components/Seo'

import usePostsList from '@hooks/posts'

import * as Gs from '../styles'

const PageTemplate = ({ data }) => {
  const page = data.markdownRemark
  const title = page.frontmatter.title
  return (
    <Layout>
      <Seo data={page} />
      <Gs.TemplateWrapper>
        <PageHeader title={title} />
        <Content html={page.html} />
      </Gs.TemplateWrapper>
      <Navigator posts={usePostsList()} />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
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
