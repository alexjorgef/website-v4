import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useDarkMode } from '../../hooks'
import ThemeSwitch from '../molecules/ThemeSwitch'
import { SIZES } from '../../constants'

const NavItem = styled(Link)`
  text-transform: uppercase;
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 16px;
  text-decoration: none;
  color: var(--color-text);
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 250ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: goldenrod;
    height: 2.5px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: ${SIZES.breakpointPhone}) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavigationBarLinks = () => {
  return (
    <>
      <NavItem to="/about" className="lined-link" activeClassName="active">
        {' '}
        <span> About </span>{' '}
      </NavItem>
      <NavItem to="/portfolio" className="lined-link" activeClassName="active">
        {' '}
        <span> Portfolio </span>{' '}
      </NavItem>
      <NavItem to="/blog" className="lined-link" activeClassName="active">
        {' '}
        <span> Blog </span>{' '}
      </NavItem>
      <NavItem to="/contact" className="lined-link" activeClassName="active">
        {' '}
        <span> Contact </span>{' '}
      </NavItem>
    </>
  )
}

const LogoContainer = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: var(--color-background);
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? '-100%' : '0')};
  }
`
const NavigationActionContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`
const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [colorMode] = useDarkMode()
  const data = useStaticQuery(graphql`
    query {
      logoLight: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      logoDark: file(relativePath: { eq: "gatsby-icon-dark.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const iconDataLight = getImage(data.logoLight)
  const iconDataDark = getImage(data.logoDark)

  return (
    <Navigation>
      <LogoContainer as={Link} to="/">
        {colorMode === `light` ? (
          <GatsbyImage image={iconDataLight} alt="logo" />
        ) : (
          <GatsbyImage image={iconDataDark} alt="logo" />
        )}
      </LogoContainer>
      <NavigationActionContainer>
        {navbarOpen ? (
          <Navbox>
            <NavigationBarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavigationBarLinks />
          </Navbox>
        )}
        <ThemeSwitch />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <Hamburger open={navbarOpen} />
        </Toggle>
      </NavigationActionContainer>
    </Navigation>
  )
}
NavigationBar.propTypes = {
  siteTitle: PropTypes.string
}
NavigationBar.defaultProps = {
  siteTitle: ``
}

export default NavigationBar
