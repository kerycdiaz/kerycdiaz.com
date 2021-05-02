import { graphql, useStaticQuery } from 'gatsby'

const usePostsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query NavigatorQuery {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "posts" } } }
          sort: { fields: [frontmatter___date], order: DESC }
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
  )
  return allMarkdownRemark.edges
}

export default usePostsList
