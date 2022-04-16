// import React, { useState, useEffect } from "react"
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ContainerLayout } from '../common'
// const { resolve } = require("@dnslink/js")
import SubText from '../atoms/SubText'
import styled from 'styled-components'
import { SIZES } from '../../constants'

const FooterStyle = styled.footer`
  padding-top: 3rem;
  padding-bottom: 1rem;
  z-index: 0;
  position: relative;
  text-align: center;
  @media (min-width: ${SIZES.breakpointPhone}) {
    background: var(--color-background);
  }
  @media (max-width: ${SIZES.breakpointPhone}) {
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
  }
`
const SubRight = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 2px;
  text-transform: none;
  margin-bottom: 3px;
  font-family: 'GT-Walsheim-Pro-Bold';
`
const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  @media (max-width: ${SIZES.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`
const CopyRight = styled.div`
  font-size: 11px;
  line-height: 1.8;
  letter-spacing: 1px;
  text-transform: none;
`
const FooterSocialMedia = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${SIZES.breakpointPhone}) {
    justify-content: space-between;
  }
  li:not(:first-child) {
    @media (min-width: ${SIZES.breakpointPhone}) {
      margin-left: 3rem;
    }
  }
`
const MediaLink = styled.a`
  padding: 1rem 0rem;
  padding-bottom: 0.5rem;
  line-height: 1;
  font-size: 1rem;
  text-transform: capitalize;
  font-family: 'GT-Walsheim-Pro-Bold';
  color: var(--color-primary);
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorSocialMedia {
            id
            name
            showAbout
            showFooter
            url
          }
          siteQuote
          siteQuoteAuthor
        }
      }
    }
  `)

  // const [state, setState] = useState({})

  // useEffect(() => {
  //   const resolveDnslink = async domain => {
  //     let result
  //     try {
  //       result = await resolve(domain)
  //       setState({ ...state, dnslinkHash: result.links.ipfs[0].identifier })
  //     } catch (err) {
  //       setState({ ...state, dnslinkHash: "error" })
  //     }
  //   }
  //   resolveDnslink("website-v4.alexjorgef.com")
  // }, [state])

  const authorSocialMedia = data.site.siteMetadata.authorSocialMedia
  const siteQuote = data.site.siteMetadata.siteQuote
  const siteQuoteAuthor = data.site.siteMetadata.siteQuoteAuthor

  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <FooterBody>
            <FooterSocialMedia>
              {authorSocialMedia
                .filter((s) => s.showFooter === true)
                .map((s) => (
                  <li key={s.url}>
                    <MediaLink
                      className="lined-link"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`follow me on ${s.name}`}
                    >
                      {s.name}
                    </MediaLink>
                  </li>
                ))}
            </FooterSocialMedia>
          </FooterBody>
          <div className="box">
            <SubRight>{'"' + siteQuote + '" - ' + siteQuoteAuthor}</SubRight>
            <CopyRight className="text-dark">
              <SubText>
                {' '}
                This website is open source, hosted by{' '}
                <a
                  href="https://app.netlify.com/sites/alexjorgef/deploys?filter=master"
                  className="lined-link"
                >
                  Netlify
                </a>{' '}
                and deployed with{' '}
                <a
                  href="https://gitlab.com/alexjorgef/website/-/blob/master/.gitlab-ci.yml"
                  className="lined-link"
                >
                  GitLab CI
                </a>
                .
                {process.env.NODE_ENV !== 'production' ? (
                  <span>{''}</span>
                ) : (
                  <span></span>
                  // <span>{" - " + state.dnslinkHash}</span>
                )}
              </SubText>
              <SubText>© 2022 — All Rights Reserved</SubText>
            </CopyRight>
          </div>
        </ContainerLayout>
      </FooterStyle>
    </>
  )
}

export default Footer
