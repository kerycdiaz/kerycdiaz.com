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
                    resolutions(width: 90, height: 90) {
                      ...GatsbyImageSharpResolutions_withWebp_noBase64
                    }
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
