const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type GithubDataDataViewerRepositoriesNodesStargazers {
      totalCount: Int
    }

    type GithubDataDataViewerRepositoriesNodesLicenseInfo {
      name: String
    }

    type GithubDataDataViewerRepositoriesNodesLanguagesEdgesNode {
      name: String
      color: String
    }

    type GithubDataDataViewerRepositoriesNodesLanguagesEdges {
      node: GithubDataDataViewerRepositoriesNodesLanguagesEdgesNode
    }

    type GithubDataDataViewerRepositoriesNodesLanguages {
      edges: [GithubDataDataViewerRepositoriesNodesLanguagesEdges]
    }

    type GithubDataDataViewerRepositoriesNodes {
      name: String
      description: String
      homepageUrl: String
      forkCount: Int
      createdAt(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      updatedAt(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      resourcePath: String
      languages: GithubDataDataViewerRepositoriesNodesLanguages
      licenseInfo: GithubDataDataViewerRepositoriesNodesLicenseInfo
      stargazers: GithubDataDataViewerRepositoriesNodesStargazers
    }

  `

  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blogs/post.js`)
  const categoriesTemplate = path.resolve('./src/templates/blogs/categories.js')
  const portfolioWork = path.resolve(`./src/templates/works/work.js`)
  const portfolioArchive = path.resolve(`./src/templates/archived/archive.js`)
  const blogResult = await graphql(
    `
      {
        blogGroup: allMdx(
          filter: { fileAbsolutePath: { regex: "/(/content/blog)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
        categoriesGroup: allMdx(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )
  const worksResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(works)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  const archivedResult = await graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/(archived)/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (blogResult.errors || worksResult.errors || archivedResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog posts pages.
  const posts = blogResult.data.blogGroup.edges
  const works = worksResult.data.allMdx.edges
  const archived = archivedResult.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })

    // Extract tag data from query
    const categories = blogResult.data.categoriesGroup.group
    // Make tag pages
    categories.forEach((category) => {
      createPage({
        path: `/${_.kebabCase(category.fieldValue)}/`,
        component: categoriesTemplate,
        context: {
          category: category.fieldValue
        }
      })
    })
  })
  works.forEach((work) => {
    createPage({
      path: work.node.fields.slug,
      component: portfolioWork,
      context: {
        slug: work.node.fields.slug
      }
    })
  })
  archived.forEach((archive) => {
    createPage({
      path: archive.node.fields.slug,
      component: portfolioArchive,
      context: {
        slug: archive.node.fields.slug
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value
    })
  }
}
