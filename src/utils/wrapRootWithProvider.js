import React from 'react'
import PropTypes from 'prop-types'
import Boot from '../components/Boot'

const RootWrapper = ({ element, props }) => {
  return <Boot {...props}>{element}</Boot>
}
RootWrapper.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any
}
export default RootWrapper
