import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import { calculateLinesToHighlight, getLanguage } from '../../utils/code'
import { useDarkMode } from '../../hooks'
import PropTypes from 'prop-types'

export const Code = ({
  codeString,
  withLineNumbers = false,
  className,
  metastring = ``
}) => {
  //   const { colorMode } = useColorMode()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const hasLineNumbers = withLineNumbers && language !== `withLineNumbers`

  //   const className = props.children.props.className || ''
  const language = getLanguage(className)
  const [colorMode] = useDarkMode()
  const theme = colorMode === `light` ? lightTheme : darkTheme

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div>
          <span>{language}</span>
          <div data-language={language}>
            <pre className={className} style={style}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }
                return (
                  <div key={i} {...lineProps}>
                    {hasLineNumbers && (
                      <span className="line-number-style">{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  )
}

Code.propTypes = {
  codeString: PropTypes.string,
  withLineNumbers: PropTypes.bool,
  className: PropTypes.string,
  metastring: PropTypes.string
}
