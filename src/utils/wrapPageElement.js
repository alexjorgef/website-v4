import React from 'react'
import PropTypes from 'prop-types'
import App from '../components/App'

const PageWrapper = ({ element, props }) => {
  return <App {...props}>{element}</App>
}
PageWrapper.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any
}
export default PageWrapper
