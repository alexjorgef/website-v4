import React from 'react'
import PropTypes from 'prop-types'
import { RepoContent } from '../../styled/repository'

import {
  RepositoryHeader,
  RepositoryFooter,
  RepositoryDescription
} from './repositoryLayout/index'

const Repository = ({ repo }) => {
  return (
    <RepoContent>
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </RepoContent>
  )
}

Repository.propTypes = {
  repo: PropTypes.object.isRequired
}

export default Repository
