import React from 'react'
import styled from 'styled-components'

const ButtonReadMoreStyle = styled.span`
  color: var(--color-text);
  font-size: 1rem;
  text-transform: inherit;
  letter-spacing: 0.7px;
  font-family: 'GT-Walsheim-Pro-Medium';
  &:hover {
    color: var(--color-primary);
  }
  &:after {
    bottom: 1px;
    height: 3px;
    background: var(--color-primary);
  }
`

const ButtonReadMore = ({ ...props }) => {
  return <ButtonReadMoreStyle {...props}></ButtonReadMoreStyle>
}

ButtonReadMore.propTypes = {}

export default ButtonReadMore
