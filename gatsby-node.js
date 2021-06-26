/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const path = require('path')

 module.exports.createPages = async ({ graphql, actions }) => {
     const { createPage } = actions
     const employeeTemplate = path.resolve('./src/templates/employee.js')
     const res = await graphql(`
     query EmployeeData {
        allContentfulEmployeeProfile {
          edges {
            node {
              slug
            }
          }
        }
      }
     `)
 
     res.data.allContentfulEmployeeProfile.edges.forEach((edge) => {
         createPage({
             component: employeeTemplate,
             path: `/employees/${edge.node.slug}`,
             context: {
                 slug: edge.node.slug
             }
         })
     })
 }
// You can delete this file if you're not using it
