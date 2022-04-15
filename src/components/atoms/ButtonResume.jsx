import React from 'react'
import styled from 'styled-components'

const ResumeButtonStyle = styled.a`
  color: var(--color-text);
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: 'GT-Walsheim-Pro-Medium';
  border: 5px solid var(--color-text);
  display: block;
  margin: 2rem 0 2rem 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  transition: color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
`

const ResumeButton = ({ ...props }) => {
  return <ResumeButtonStyle {...props}></ResumeButtonStyle>
}

ResumeButton.propTypes = {}

export default ResumeButton
