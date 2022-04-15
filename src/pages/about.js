import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { SectionIntro, ContainerLayout } from '../components/common'
import ButtonResume from '../components/atoms/ButtonResume'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'
import { SIZES } from '../constants'
import SocialIcon from '../components/atoms/SocialIcon'

const AboutSection = styled.section`
  text-align: left;
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
const AboutSectionOne = styled.section`
  text-align: left;
  .buttonContact {
    text-align: center;
  }
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    text-align: left;
    .buttonContact {
      text-align: left;
    }
  }
`
const AboutSkills = styled.ul`
  font-size: 1.2rem;
  line-height: 2;
  color: var(--color-text);
  text-transform: none;
`
const SocialSection = styled.section`
  text-align: center;
  margin: 1.5rem 0 0rem 0;
`
const SocialMediaIcon = styled.a`
  color: inherit;
  margin: 0 1rem;
  :hover {
    color: var(--color-primary);
  }
`
const Avatar = styled(GatsbyImage)`
  border-radius: 55px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.2);
  width: 100%;
`
const Title = styled.h1`
  font-size: 3rem;
  text-transform: none;
  font-family: 'GT-Walsheim-Pro-Bold';
  margin: 5rem 0 0 0;
  @media (max-width: ${SIZES.breakpointPhone}) {
    text-align: center;
    font-size: 2rem;
  }
`
const SubTitle = styled.h2`
  font-family: 'GT-Walsheim-Pro-Medium';
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media (min-width: ${SIZES.breakpointPhone}) {
    font-size: 1.8em;
  }
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      site {
        siteMetadata {
          authorFirstName
          authorSubTitle
          authorSocialMedia {
            id
            name
            showAbout
            showFooter
            url
          }
          authorResumeLink
          authorSkills {
            name
            technologies
          }
        }
      }
      aboutMain: mdx(slug: { eq: "aboutMain" }) {
        body
      }
      aboutTech: mdx(slug: { eq: "aboutTech" }) {
        body
      }
    }
  `)
  const imageData = getImage(data.placeholderImage)
  const mainBody = data.aboutMain.body
  const techBody = data.aboutTech.body
  const authorFirstName = data.site.siteMetadata.authorFirstName
  const authorSubTitle = data.site.siteMetadata.authorSubTitle
  const authorSocialMedia = data.site.siteMetadata.authorSocialMedia
  const authorResumeLink = data.site.siteMetadata.authorResumeLink
  const authorSkills = data.site.siteMetadata.authorSkills
  return (
    <Layout>
      <Seo title="About me" />
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar image={imageData} alt="user photo" />
              <SubTitle>{authorSubTitle}</SubTitle>
              <SocialSection>
                {authorSocialMedia
                  .filter((s) => s.showAbout === true)
                  .map((s) => {
                    return (
                      <SocialMediaIcon key={s.id} href={s.url}>
                        <SocialIcon name={s.id} />
                      </SocialMediaIcon>
                    )
                  })}
              </SocialSection>
            </div>
            <div>
              <Title> Hi, I&apos;m {authorFirstName} </Title>
              <MDXRenderer>{mainBody}</MDXRenderer>
              <ButtonResume href={authorResumeLink} target="_blank">
                {' '}
                Download resume{' '}
              </ButtonResume>
            </div>
          </AboutSection>
          <AboutSectionOne>
            <Title> Technology stack </Title>
            <MDXRenderer>{techBody}</MDXRenderer>
            <Text>
              Technologies that I&apos;m really interested in working with:
            </Text>
            <AboutSkills>
              {authorSkills.map(({ name, technologies }) => (
                <li key={name}>
                  {name}:{' '}
                  {technologies
                    .map((name) => <b key={name}>{name}</b>)
                    .reduce((prev, curr) => [prev, ', ', curr])}
                </li>
              ))}
            </AboutSkills>
            <Text>
              Feel free to check my work at{' '}
              <Link to="/portfolio" className="text-primary lined-link">
                <b>/portfolio</b>
              </Link>
              .
            </Text>
            <Title> Get in touch </Title>
            <Text>
              Let&apos;s open a conversation and see what we could do together{' '}
              <span role="img" aria-label="smiling face">
                😉
              </span>{' '}
            </Text>
            <div className="buttonContact">
              <Button href="/contact"> Get in touch </Button>
            </div>
          </AboutSectionOne>
        </ContainerLayout>
      </SectionIntro>
    </Layout>
  )
}

export default AboutPage
