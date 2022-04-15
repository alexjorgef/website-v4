import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CategoriesTags from '../../components/categoriesTags/categoriesTags'
import {
  ContainerLayout,
  WorkPost,
  Intro,
  SubTitle,
  HeaderIntro,
  SmallText,
  UnderLink
} from '../../components/common'
import SubText from '../../components/atoms/SubText'
import Layout from '../../components/Layout'
import Text from '../../components/atoms/Text'
import Title from '../../components/atoms/Title'
import Seo from '../../components/Seo'
import ButtonReadMore from '../../components/atoms/ButtonReadMore'

const Categories = ({ data }) => {
  const { edges } = data.allMdx
  // const tagHeader = `${totalCount} post${
  //   totalCount === 1 ? "" : "s"
  // } tagged with "${category}"`

  return (
    <Layout>
      <Seo title="Blog Home Page" />
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
            {edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const imgData = getImage(node.frontmatter.image)
              return (
                <WorkPost key={node.fields.slug}>
                  <div className="media">
                    <div className="image-wrapper">
                      <Link to={node.fields.slug}>
                        <GatsbyImage image={imgData} alt="work title" />
                      </Link>
                    </div>
                    <SmallText>
                      Image Credits :
                      <UnderLink
                        href={node.frontmatter.imageCredit}
                        target="_blank"
                        title="image credit"
                      >
                        {node.frontmatter.imageCredit}
                      </UnderLink>
                    </SmallText>
                  </div>

                  <div className="content">
                    <header>
                      <SmallText>
                        <span className="align-middle">
                          {node.frontmatter.categories.map((item, index) => (
                            <Link to={`/${item}`} key={index}>
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
                          read time: {node.frontmatter.time} min
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
                </WorkPost>
              )
            })}
          </ContainerLayout>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

Categories.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
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

export default Categories

export const pageQuery = graphql`
  query ($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
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
