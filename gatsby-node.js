const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // create blog post pages
  const posts = result.data.allMdx.edges

  // call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/Layout.tsx`),
      context: { id: node.id },
    })
  })
}