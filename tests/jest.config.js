module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './tests/babel.config.js' }],
    '^.+\\.(md|mdx)$': 'jest-transformer-mdx'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1` // Workaround for https://github.com/facebook/jest/issues/9771
  },
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '<rootDir>.*/public',
    'coverage'
  ],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
  globals: {
    __PATH_PREFIX__: ''
  },
  testURL: `http://localhost`,
  setupFiles: ['<rootDir>/tests/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup-test-env.js'],
  testEnvironment: 'jsdom'
}
