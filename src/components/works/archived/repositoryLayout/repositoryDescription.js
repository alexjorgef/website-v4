import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../styled/repository'

export const RepositoryArchDescription = ({ repo }) => (
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

RepositoryArchDescription.propTypes = {
  repo: PropTypes.shape({
    description: PropTypes.string,
    homepageUrl: PropTypes.string
  })
}

export default RepositoryArchDescription
