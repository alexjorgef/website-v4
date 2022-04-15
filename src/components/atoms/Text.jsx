import React from 'react'
import styled from 'styled-components'
import { SIZES } from '../../constants'

const TextStyle = styled.p`
  font-size: 0.98rem;
  line-height: 2;
  color: var(--color-text);
  margin-top: 2rem;
  text-transform: none;
  @media (max-width: ${SIZES.breakpointPhone}) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  a {
    color: var(--color-primary);
  }
`

const Text = ({ ...props }) => {
  return <TextStyle {...props}></TextStyle>
}

Text.propTypes = {}

export default Text
