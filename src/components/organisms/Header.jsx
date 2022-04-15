import React from 'react'
import styled from 'styled-components'

import ThemeSwitch from '../molecules/ThemeSwitch'

const Header = () => {
  return (
    <Wrapper>
      <ThemeSwitch />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export default Header
