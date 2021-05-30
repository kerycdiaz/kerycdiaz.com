import { graphql } from 'gatsby'
import React from 'react'

import ActionsBar from '@components/ActionsBar'
import Content from '@components/Content'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Layout from '@components/Layout'
import Navigator from '@components/Navigator'
import PostFooter from '@components/PostFooter'
import PostHeader from '@components/PostHeader'
import Seo from '@components/Seo'

import usePostsList from '@hooks/posts'

import * as Gs from '../styles'

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const description = post.frontmatter.description || post.excerpt
  const date = post.frontmatter.date
  const slug = post.fields.slug
  const timeToRead = post.timeToRead
  const category = post.frontmatter.category
  return (
    <Layout>
      <Seo data={post} />
      <Gs.TemplateWrapper>
        <PostHeader
          title={title}
          subTitle={description}
          date={date}
          timeToRead={timeToRead}
          category={category}
        />
        <Content html={post.html} />
        <PostFooter
          id={post.id}
          slug={slug}
          title={title}
          subTitle={description}
        />
      </Gs.TemplateWrapper>
      <Navigator posts={usePostsList()} />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        imagen {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
        category
      }
    }
  }
`
