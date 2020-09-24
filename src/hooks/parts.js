import { graphql, useStaticQuery } from 'gatsby'

const usePartsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query InfoBoxQuery {
        allMarkdownRemark(filter: { fields: { collection: { eq: "parts" } } }) {
          edges {
            node {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default usePartsList
