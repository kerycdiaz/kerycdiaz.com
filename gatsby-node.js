const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templatePath = (template) => {
    return `./src/templates/${template}/index.js`
  }
  const postTemplate = path.resolve(templatePath('PostTemplate'))
  const pageTemplate = path.resolve(templatePath('PageTemplate'))
  const categoryTemplate = path.resolve(templatePath('CategoryTemplate'))
  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          filter: { fields: { collection: { in: ["posts", "pages"] } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
                collection
              }
              frontmatter {
                title
              }
            }
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts and pages.
  const results = result.data.postsRemark.edges

  results.forEach((result, index, node) => {
    const slug = result.node.fields.slug
    const collection = result.node.fields.collection
    const component = collection == 'posts' ? postTemplate : pageTemplate
    createPage({
      path: slug,
      component: component,
      context: {
        slug: slug,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.categoryGroup.group

  // Make tag pages
  tags.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const parent = getNode(_.get(node, 'parent'))
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName'),
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './content/assets/'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@data': path.resolve(__dirname, './data/'),
        '@hooks': path.resolve(__dirname, './src/hooks/'),
        '@store': path.resolve(__dirname, './src/store/'),
        '@styles': path.resolve(__dirname, './src/styles/'),
      },
    },
  })
}
