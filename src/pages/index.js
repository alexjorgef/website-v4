import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Button from '../components/atoms/Button'
import { SIZES } from '../constants'
import { SectionIntro, ContainerLayout } from '../components/common'

const AboutSection = styled.section`
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    display: grid;
    grid-template-columns: 2fr 0.25fr;
    grid-gap: 0rem;
    text-align: left;
  }
`
const AboutSectionRight = styled.section`
  text-align: center;
  margin-bottom: 30px;
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    display: grid;
    grid-template-columns: 0.25fr 2fr;
    grid-gap: 10rem;
    text-align: right;
  }
`
const AboutSectionFooter = styled.section`
  text-align: center;
  margin: 100px 0 0 0;
  *:nth-child(1) {
    margin: 0 0 0 0;
  }
`
const Title = styled.h1`
  font-size: 3rem;
  text-transform: none;
  font-family: 'GT-Walsheim-Pro-Bold';
  @media (max-width: ${SIZES.breakpointPhone}) {
    font-size: 2rem;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      homeData: allMdx(
        filter: { fileAbsolutePath: { regex: "/(/data/textSections/home)/" } }
        sort: { fields: slug, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            body
            slug
          }
        }
      }
      site {
        siteMetadata {
          authorShort
        }
      }
    }
  `)

  const homeSections = data.homeData.edges
  const authorShort = data.site.siteMetadata.authorShort
  return (
    <Layout>
      <Seo title="Home" />
      <SectionIntro>
        <ContainerLayout>
          {homeSections.map(({ node }) => {
            const title = node.frontmatter.title
            const body = node.body
            const slug = node.slug
            const order = slug.substr(slug.length - 1)
            return (
              <div key={slug}>
                {order % 2 === 0 ? (
                  <AboutSection>
                    <div>
                      <Title>{title}</Title>
                      <MDXRenderer>{body}</MDXRenderer>
                    </div>
                    <div></div>
                  </AboutSection>
                ) : (
                  <AboutSectionRight>
                    <div></div>
                    <div>
                      <Title>{title}</Title>
                      <MDXRenderer>{body}</MDXRenderer>
                    </div>
                  </AboutSectionRight>
                )}
              </div>
            )
          })}
          <AboutSectionFooter>
            <Button href="/about"> About {authorShort} </Button>
          </AboutSectionFooter>
        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default IndexPage
