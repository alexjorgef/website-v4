import * as React from 'react'
import styled from 'styled-components'
import { Code } from './Code'
import { preToCodeBlock } from '../../utils/code'
import { SIZES } from '../../constants'

export const components = {
  h1: styled.h1`
    color: var(--color-primary);
    font-size: 2.5em;
  `,
  h2: styled.h2`
    font-family: 'GT-Walsheim-Pro-Medium';
    margin-top: 1rem;
    margin-bottom: 1rem;
    word-spacing: 8px;
    @media (min-width: ${SIZES.breakpointPhone}) {
      font-size: 1.8em;
    }
  `,
  p: styled.p`
    font-size: 1.2rem;
    line-height: 2;
    color: var(--color-text);
    text-transform: none;
    a {
      color: var(--color-primary);
    }
  `,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  }
}
