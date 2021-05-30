import { graphql } from 'gatsby'
import React from 'react'
import { connect } from 'react-redux'

import ActionsBar from '@components/ActionsBar'
import InfoBar from '@components/InfoBar'
import InfoBox from '@components/InfoBox'
import Layout from '@components/Layout'
import Navigator from '@components/Navigator'
import Seo from '@components/Seo'

import { setCategoryFilter } from '@store/actions'
import { setNavigatorPosition } from '@store/actions'

const useSingleton = (initializer) => {
  React.useState(initializer)
}

const CategoryTemplate = ({
  pageContext,
  navigatorPosition,
  setCategoryFilter,
  setNavigatorPosition,
  data,
}) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  useSingleton(() => {
    setCategoryFilter(category)
    if (navigatorPosition !== 'is-featured') {
      setNavigatorPosition('is-featured')
    }
  })

  return (
    <Layout>
      <Seo />
      <Navigator posts={edges} />
      <ActionsBar />
      <InfoBar />
      <InfoBox />
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
  }
}

const mapDispatchToProps = {
  setCategoryFilter,
  setNavigatorPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTemplate)

export const pageQuery = graphql`
  query PostsByCategory($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "posts" } }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            imagen {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 90, height: 90)
              }
            }
            category
          }
        }
      }
    }
  }
`
