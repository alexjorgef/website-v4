import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FaCalendar } from 'react-icons/fa'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  Intro,
  ArticlePost,
  SmallText,
  ArticleBody
} from '../../components/styled/posts'
import { ContainerLayout } from '../../components/common'
import Title from '../../components/atoms/Title'
import PropTypes from 'prop-types'

const portfolioWork = ({ data }) => {
  const work = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Seo
        title={work.frontmatter.title}
        description={work.frontmatter.description || work.excerpt}
      />
      <Intro>
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>{work.frontmatter.title}</Title>
                <SmallText>
                  <FaCalendar
                    className="align-middle text-primary"
                    width="18"
                    height="18"
                  />
                  <span className="align-middle">
                    {' '}
                    {work.frontmatter.date}{' '}
                  </span>
                </SmallText>
              </header>

              <ArticleBody>
                <MDXRenderer>{work.body}</MDXRenderer>
              </ArticleBody>
            </ArticlePost>
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default portfolioWork

portfolioWork.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string.isRequired
      }),
      body: PropTypes.string,
      excerpt: PropTypes.string
    })
  })
}

export const data = graphql`
  query portfolioWorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
        time
      }
    }
  }
`
