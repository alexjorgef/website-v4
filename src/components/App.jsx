import React from 'react'

import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import Header from './organisms/Header'
import Footer from './organisms/Footer'
import NavigationBar from './organisms/NavigationBar'
import './App.module.css'
import { SIZES } from '../constants'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    body {
      font-size: 14px;
      font-family: 'GT-Walsheim-Pro-Regular';
      margin: 0;
      background: var(--color-background);
      color: var(--color-text);
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }
    b,
    strong {
      font-weight: bolder;
      font-family: 'GT-Walsheim-Pro-Bold';
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    .center {
      text-align: center;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    [hidden] {
      display: none;
    }

    .text-dark {
      color: var(--color-text);
    }
    .text-primary {
      color: var(--color-primary);
    }
    .align-middle {
      vertical-align: middle;
    }

    p {
      font-size: 1.125rem;
      font-weight: 200;
      line-height: 1.8;
    }
  }

  .lined-link {
    display: inline-block;
    position: relative;
    color: var(--color-primary);
    padding-bottom: .25em;
    transition: all .2s ease-out;
    will-change: transform, color;
    &:after {
      z-index: 1;
      position: absolute;
      bottom: -1px;
      left: 0;
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background-color: var(--color-primary);
      transform: scale(0, 1);
      transform-origin: 100% 50%;
      will-change: transform;
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1),
      -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover:after,
    &.active:after {
      background-color: var(--color-primary);
      transform: scale(1);
      transform-origin: 0 50%;
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out,
      -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  .error__emoji {
    width: 30vw;
  }
`
export const MainContent = styled.div``
export const MainContainerLayout = styled.div`
  width: ${SIZES.width};
  margin-left: auto;
  margin-right: auto;

  &.wrapper {
    max-width: ${SIZES.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    max-width: 75rem;
  }
`

function App({ children }) {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <MainContent>
        <NavigationBar />
        <MainContainerLayout>{children}</MainContainerLayout>
      </MainContent>
      <Footer />
    </>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
