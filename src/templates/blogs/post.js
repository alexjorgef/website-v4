import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FaCalendar, FaClock } from 'react-icons/fa'
// TODO: Fetch Disqus data
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import {
  Intro,
  ArticlePost,
  SmallText,
  ArticleBody,
  NaviagtionList,
  NaviagtionLi
} from '../../components/styled/posts'
import { ContainerLayout } from '../../components/common'
import Title from '../../components/atoms/Title'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const image = post.frontmatter.image ? post.frontmatter.image : null
  // TODO: Fetch Disqus data
  // const disqusConfig = {
  //   url: `${data.site.siteMetadata.siteUrl}`,
  //   identifier: pageContext.slug.slice(1, -1),
  //   title: post.frontmatter.title
  // }

  return (
    <Layout title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
      />
      <Intro>
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>{post.frontmatter.title}</Title>
                <SmallText>
                  <FaCalendar
                    className="align-middle text-primary"
                    width="18"
                    height="18"
                  />
                  <span className="align-middle">
                    {' '}
                    date published : {post.frontmatter.date}{' '}
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
                    read time: {post.frontmatter.time} min{' '}
                  </span>
                </SmallText>
              </header>

              <ArticleBody>
                <MDXRenderer>{post.body}</MDXRenderer>
              </ArticleBody>
            </ArticlePost>

            <nav>
              <NaviagtionList>
                <NaviagtionLi>
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      className="lined-link"
                    >
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </NaviagtionLi>
                <NaviagtionLi>
                  {next && (
                    <Link
                      to={next.fields.slug}
                      rel="next"
                      className="lined-link"
                    >
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </NaviagtionLi>
              </NaviagtionList>
            </nav>
            {/* TODO: Fetch Disqus data */}
            {/* <CommentCount config={disqusConfig} placeholder={'...'} />
            <Disqus config={disqusConfig} /> */}
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    next: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    slug: PropTypes.string
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        siteUrl: PropTypes.string
      })
    }),
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired
      }),
      body: PropTypes.string,
      excerpt: PropTypes.string
    })
  })
}

export default BlogPost

export const data = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        time
      }
    }
  }
`
