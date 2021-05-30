import { graphql, useStaticQuery } from 'gatsby'

const usePagesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query InfoBarQuery {
        allMarkdownRemark(filter: { fields: { collection: { eq: "pages" } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                hiddeMenu
                menuTitle
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default usePagesList
