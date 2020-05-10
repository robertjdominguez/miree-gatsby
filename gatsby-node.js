const path = require("path")

// Custom function with args being passed from Gatsby's build tool
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allStrapiStudentPortfolios {
          edges {
            node {
              Slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allStrapiStudentPortfolios.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.Slug}`,
          component: path.resolve("src/components/profiles/StudentPage.js"),
          context: {
            Slug: node.Slug,
          },
        })
      })
      resolve()
    })
  })
}
