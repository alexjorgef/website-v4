import React from 'react'
import { FaKey } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { FooterItem, Circle } from '../../../styled/repository'

export const RepositoryArchFooter = ({ repo }) => {
  const language = repo.language
  return (
    <div style={{ color: `#586069`, fontSize: 12 }}>
      <FooterItem>
        <Circle
          style={{
            backgroundColor: language ? '#C06C84' : '#000'
          }}
        />{' '}
        {language ? language : 'undifined'}
      </FooterItem>
      {repo.licenseInfo(
        <FooterItem>
          <FaKey />
          <span> {repo.licenseInfo.name} </span>
        </FooterItem>
      )}
      {repo.homepageUrl && <FooterItem />}{' '}
    </div>
  )
}

RepositoryArchFooter.propTypes = {
  repo: PropTypes.shape({
    language: PropTypes.string,
    homepageUrl: PropTypes.string,
    licenseInfo: PropTypes.shape({
      name: PropTypes.string
    })
  })
}

export default RepositoryArchFooter
