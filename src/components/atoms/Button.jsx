import React from 'react'
import styled from 'styled-components'

export const ButtonStyle = styled.a`
  cursor: pointer;
  margin: 5% 0%;
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: inherit;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border: 4px solid var(--color-text);
  color: var(--color-text);
  background: var(--color-background);
  outline: none;
  position: relative;
  display: inline-block;
  padding: 15px 10px 14px;
  cursor: pointer;
  width: auto;
  min-width: 200px;
  &::after {
    min-width: 200px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid var(--color-text);
    background-color: var(--color-text);
    left: 4px;
    top: 9px;
    z-index: -1;
    content: '';
    transition: all 0.5s;
  }
  &:hover:after {
    top: 0px;
    left: -4px;
  }
`

const Button = ({ ...props }) => {
  return <ButtonStyle {...props}></ButtonStyle>
}

Button.propTypes = {}

export default Button
