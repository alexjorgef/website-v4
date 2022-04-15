import React from 'react'
import styled from 'styled-components'
// import { SIZES } from '../../constants'

const TagStyle = styled.a`
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  background: rgb(183 181 181 / 40%);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 1px solid rgb(0 0 0 / 2%);
  display: inline-block;
  margin-bottom: 1rem;
  &.active {
    background: var(--color-primary);
    color: white;
    font-family: 'GT-Walsheim-Pro-Bold';
  }
`

const Tag = ({ ...props }) => {
  return <TagStyle {...props}></TagStyle>
}

Tag.propTypes = {}

export default Tag
