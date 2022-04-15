import React from 'react'
import styled from 'styled-components'
import { SIZES } from '../../constants'

const SubTextStyle = styled.p`
  font-size: 0.74rem;
  line-height: 1.2;
  text-transform: none;
  color: var(--color-text);
  @media (max-width: ${SIZES.breakpointPhone}) {
    font-size: 0.63rem;
  }
  a {
    color: var(--color-primary);
  }
`

const SubText = ({ ...props }) => {
  return <SubTextStyle {...props}></SubTextStyle>
}

SubText.propTypes = {}

export default SubText
