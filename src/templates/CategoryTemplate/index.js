import { Link, graphql } from 'gatsby'
import React from 'react'

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${category}"`
  return (
    <div>
      <h1>{categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
            his links to a page that does not yet exist.
            You'll come back to it!
        */}
      <Link to="/category">All categories</Link>
    </div>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query PostsByCategory($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "posts" } }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
