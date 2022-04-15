import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { components } from './mdx'

const Boot = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
Boot.propTypes = {
  children: PropTypes.any
}

export default Boot
