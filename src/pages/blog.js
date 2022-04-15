import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  ContainerLayout,
  BlogPost,
  Intro,
  SubTitle,
  HeaderIntro,
  SmallText,
  UnderLink
} from '../components/common'
import ButtonReadMore from '../components/atoms/ButtonReadMore'
import Text from '../components/atoms/Text'
import Title from '../components/atoms/Title'
import SubText from '../components/atoms/SubText'
import CategoriesTags from '../components/categoriesTags/categoriesTags'
import kebabCase from 'lodash/kebabCase'

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <>
      <Layout>
        <Seo title="Blog" />
        <Intro>
          <ContainerLayout>
            <SubTitle>Articles</SubTitle>
            <HeaderIntro>
              <SubText>
                Here I try to write about what inspires me. Maybe just an empty
                page or a set of loose words.
              </SubText>
              <CategoriesTags />
            </HeaderIntro>

            <ContainerLayout className="wrapper">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const imgData = getImage(node.frontmatter.image)
                return (
                  <BlogPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <GatsbyImage image={imgData} alt="work title" />
                        </Link>
                      </div>
                      {node.frontmatter.imageCredit && (
                        <SmallText>
                          {/* TODO: if else conditional render */}
                          Image Credits :
                          {node.frontmatter.imageCredit.length >= 60 && (
                            <UnderLink
                              href={node.frontmatter.imageCredit}
                              target="_blank"
                              title="image credit"
                            >
                              {node.frontmatter.imageCredit.slice(0, 50)}...
                              {node.frontmatter.imageCredit.slice(-5)}
                            </UnderLink>
                          )}
                          {node.frontmatter.imageCredit.length < 60 && (
                            <UnderLink
                              href={node.frontmatter.imageCredit}
                              target="_blank"
                              title="image credit"
                            >
                              {node.frontmatter.imageCredit}
                            </UnderLink>
                          )}
                        </SmallText>
                      )}
                    </div>
                    <div className="content">
                      <header>
                        <SmallText>
                          <span className="align-middle">
                            {node.frontmatter.categories.map((item, index) => (
                              <Link to={`/${kebabCase(item)}`} key={index}>
                                <span className="align-middle text-primary text-underline">
                                  #{item}
                                </span>
                                {node.frontmatter.categories.length !==
                                index + 1 ? (
                                  <span className="align-middle text-primary">
                                    {' '}
                                    ,{' '}
                                  </span>
                                ) : (
                                  ''
                                )}
                              </Link>
                            ))}{' '}
                          </span>
                        </SmallText>
                        <Title>
                          <Link
                            className="text-primary"
                            style={{ boxShadow: `none` }}
                            to={node.fields.slug}
                          >
                            {title}
                          </Link>
                        </Title>
                        <SmallText>
                          <FaCalendar
                            className="align-middle text-primary"
                            width="18"
                            height="18"
                          />
                          <span className="align-middle">
                            {' '}
                            date published : {node.frontmatter.date}{' '}
                          </span>
                        </SmallText>
                        <SmallText>
                          <FaClock
                            className="align-middle text-primary"
                            width="18"
                            height="18"
                          />
                          <span className="align-middle">
                            {' '}
                            read time: {node.frontmatter.time} min{' '}
                          </span>
                        </SmallText>
                      </header>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt
                        }}
                      />
                      <Link to={node.fields.slug}>
                        <ButtonReadMore className="lined-link">
                          {' '}
                          read more &#8594;{' '}
                        </ButtonReadMore>
                      </Link>
                    </div>
                  </BlogPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
  })
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(/content/blog)/" } }
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
            time
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            categories
            imageCredit
            description
          }
        }
      }
    }
  }
`
