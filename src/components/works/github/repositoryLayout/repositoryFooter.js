import React from 'react'
import PropTypes from 'prop-types'
import { FaStar, FaKey } from 'react-icons/fa'
import { FooterItem, Circle } from '../../../styled/repository'

export const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0]
  const timeAgo = new Date(repo.updatedAt) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)) // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat('en', { style: 'narrow' }).format(
      daysAgo,
      'day'
    )
  }
  return (
    <div style={{ color: `#586069`, fontSize: 12 }}>
      <FooterItem>
        <Circle
          style={{
            backgroundColor: language ? language.node.color : '#000'
          }}
        />{' '}
        {language ? language.node.name : 'undifined'}
      </FooterItem>
      <FooterItem>
        <FaStar className="star" />
        <span> {repo.stargazers.totalCount} </span>
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <FaKey />
          <span> {repo.licenseInfo.name} </span>
        </FooterItem>
      )}
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />}{' '}
    </div>
  )
}

RepositoryFooter.propTypes = {
  repo: PropTypes.shape({
    updatedAt: PropTypes.string,
    licenseInfo: PropTypes.shape({
      name: PropTypes.string
    }),
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number
    }),
    languages: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          name: PropTypes.string
        })
      })
    }),
    description: PropTypes.string,
    homepageUrl: PropTypes.string
  })
}

export default RepositoryFooter
