import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../styled/repository'

export const RepositoryDescription = ({ repo }) => (
  <div>
    <Text>
      {repo.description || "this repo didn't have any description"}

      {repo.homepageUrl && (
        <>
          {' -'} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </Text>
  </div>
)

RepositoryDescription.propTypes = {
  repo: PropTypes.shape({
    description: PropTypes.string,
    homepageUrl: PropTypes.string
  })
}

export default RepositoryDescription
