import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaKeybase
} from 'react-icons/fa'

export default function SocialIcon({ name, ...props }) {
  const components = {
    linkedin: (props) => <FaLinkedin {...props} />,
    github: (props) => <FaGithub {...props} />,
    gitlab: (props) => <FaGitlab {...props} />,
    instagram: (props) => <FaInstagram {...props} />,
    keybase: (props) => <FaKeybase {...props} />
  }

  const IconMapped = components[name]
  if (!IconMapped) return null
  const IconMappedColor = styled(IconMapped)`
    &:hover {
      fill: var(--color-primary);
    }
  `

  return <IconMappedColor {...props} size="24" color="var(--color-text)" />
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired
}
