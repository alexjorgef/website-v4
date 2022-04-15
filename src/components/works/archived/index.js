import React from 'react'
import PropTypes from 'prop-types'
import { RepoContent } from '../../styled/repository'

import {
  RepositoryArchHeader,
  RepositoryArchFooter,
  RepositoryArchDescription
} from './repositoryLayout/index'

const RepositoryArch = ({ repo }) => {
  return (
    <RepoContent>
      <RepositoryArchHeader repo={repo} />
      <RepositoryArchDescription repo={repo} />
      <RepositoryArchFooter repo={repo} />
    </RepoContent>
  )
}

RepositoryArch.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepositoryArch
