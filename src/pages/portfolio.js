import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Link, graphql } from 'gatsby'
import {
  ContainerLayout,
  WorkPost,
  ArchivedWorkPost,
  Category,
  Intro,
  SubTitle
} from '../components/common'
import Text from '../components/atoms/Text'
import Tag from '../components/atoms/Tag'
import Title from '../components/atoms/Title'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// TODO: Fetch GitHub data
// import Repository from '../components/works/github'
// import { RepoGrid } from '../components/styled/repository'

const Portfolio = ({ data }) => {
  const archived = data.archivedData.edges
  const works = data.worksData.edges
  // TODO: Fetch GitHub data
  // const { repositories } = data.githubData.data.viewer

  return (
    <>
      <Layout>
        <Seo title="Portfolio" />
        <Intro>
          <ContainerLayout>
            <SubTitle className="text-dark">Projects</SubTitle>
            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const imgData = getImage(node.frontmatter.image)
                const slug = node.fields.slug
                return (
                  <WorkPost key={slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={slug}>
                          <GatsbyImage image={imgData} alt="work title" />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link
                            className="text-primary lined-link"
                            style={{ boxShadow: `none` }}
                            to={slug}
                          >
                            {title}
                          </Link>
                        </Title>
                      </header>
                      <Text>
                        {node.frontmatter.description || node.excerpt}
                      </Text>
                      <div>
                        {node.frontmatter.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
            <SubTitle className="text-dark">Archived Projects</SubTitle>
            <ContainerLayout className="wrapper">
              {archived.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const imgData = getImage(node.frontmatter.image)
                return (
                  <ArchivedWorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <GatsbyImage image={imgData} alt="work title" />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link
                            className="text-primary lined-link"
                            style={{ boxShadow: `none` }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </Title>
                      </header>
                      {/* <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt
                        }}
                      /> */}
                      <Text>
                        {node.frontmatter.description || node.excerpt}
                      </Text>
                      <div>
                        {node.frontmatter.tags.map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </ArchivedWorkPost>
                )
              })}
            </ContainerLayout>
            {/* TODO: Fetch GitHub data */}
            {/* <SubTitle className="text-dark">Open Source Code</SubTitle>
            <RepoGrid>
              {repositories.nodes
                .map((repo, index) => <Repository key={index} repo={repo} />)
                .reverse()}
            </RepoGrid> */}
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    worksData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    }),
    archivedData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
    // TODO: Fetch GitHub data
    // githubData: PropTypes.shape({
    //   data: PropTypes.shape({
    //     viewer: PropTypes.shape({
    //       name: PropTypes.string.isRequired,
    //       repositories: PropTypes.shape({
    //         nodes: PropTypes.arrayOf(
    //           PropTypes.shape({
    //             name: PropTypes.string,
    //             description: PropTypes.string
    //           }).isRequired
    //         )
    //       })
    //     })
    //   })
    // })
  })
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    worksData: allMdx(
      filter: { fileAbsolutePath: { regex: "/(works)/" } }
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
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            tags
            category
            description
          }
        }
      }
    }
    archivedData: allMdx(
      filter: { fileAbsolutePath: { regex: "/(archived)/" } }
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
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            tags
            category
            description
          }
        }
      }
    }
  }
`
// TODO: Fetch GitHub data
// githubData {
//   data {
//     viewer {
//       name
//       avatarUrl
//       repositories {
//         nodes {
//           name
//           description
//           url
//           homepageUrl
//           resourcePath
//           forkCount
//           createdAt
//           updatedAt
//           languages {
//             edges {
//               node {
//                 name
//                 color
//               }
//             }
//           }
//           licenseInfo {
//             name
//           }
//           stargazers {
//             totalCount
//           }
//         }
//       }
//     }
//   }
// }
