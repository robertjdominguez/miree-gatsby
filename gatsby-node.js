const path = require("path")

// Custom function with args being passed from Gatsby's build tool
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulStudentPortfolios {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allContentfulStudentPortfolios.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve("src/components/profiles/StudentPage.js"),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
