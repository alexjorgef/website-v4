import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from 'react-github-btn'
import { RepoHead, Title } from '../../../styled/repository'

export const RepositoryHeader = ({ repo }) => {
  return (
    <RepoHead>
      <Title>
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </Title>
      <GitHubButton
        href={`https://github.com${repo.resourcePath}`}
        data-icon="Star"
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </RepoHead>
  )
}

RepositoryHeader.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    resourcePath: PropTypes.string
  })
}

export default RepositoryHeader
