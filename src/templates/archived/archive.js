import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FaCalendar } from 'react-icons/fa'
import {
  Intro,
  ArticlePost,
  SmallText,
  ArticleBody
} from '../../components/styled/posts'
import { ContainerLayout } from '../../components/common'
import Title from '../../components/atoms/Title'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const portfolioArchive = ({ data }) => {
  const archive = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Seo
        title={archive.frontmatter.title}
        description={archive.frontmatter.description || archive.excerpt}
      />
      <Intro>
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>{archive.frontmatter.title}</Title>
                <SmallText>
                  <FaCalendar
                    className="align-middle text-primary"
                    width="18"
                    height="18"
                  />
                  <span className="align-middle">
                    {' '}
                    {archive.frontmatter.date}{' '}
                  </span>
                </SmallText>
              </header>

              <ArticleBody>
                <MDXRenderer>{archive.body}</MDXRenderer>
              </ArticleBody>
            </ArticlePost>
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default portfolioArchive

export const data = graphql`
  query portfolioArchiveBySlug($slug: String!) {
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
