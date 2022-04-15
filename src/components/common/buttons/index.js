import styled from 'styled-components'

export const ButtonColored = styled.a`
  cursor: pointer;
  margin: 0 0;
  font-family: 'GT-Walsheim-Pro-Medium';
  font-size: inherit;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border: 4px solid var(--color-primary);
  color: var(--color-primary);
  background: #fff;
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
    border: 4px solid var(--color-primary);
    background-color: var(--color-primary);
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
