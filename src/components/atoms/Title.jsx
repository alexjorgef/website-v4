import React from 'react'
import styled from 'styled-components'
import { SIZES } from '../../constants'

export const TitleStyle = styled.h1`
  font-family: 'GT-Walsheim-Pro-Bold';
  font-size: 2rem;
  text-transform: none;
  @media (max-width: ${SIZES.breakpointPhone}) {
    font-size: 1.5rem;
  }
`

const Title = ({ ...props }) => {
  return <TitleStyle {...props}></TitleStyle>
}

Title.propTypes = {}

export default Title
