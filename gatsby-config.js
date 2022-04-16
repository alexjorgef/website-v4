const data = require('./src/data/data')

require('dotenv').config()

if (
  !process.env.GATSBY_GITHUB_TOKEN ||
  process.env.GATSBY_GITHUB_TOKEN === 'xxx' ||
  !process.env.GATSBY_GA_MEASUREMENT_ID ||
  process.env.GATSBY_GA_MEASUREMENT_ID === 'xxx'
) {
  throw Error(`
      ⚠️  A GitHub token as GATSBY_GITHUB_TOKEN is required to build some parts of the blog.
      ⚠️  Check the README https://github.com/alexjorgef/website#-development.
  `)
}

module.exports = {
  siteMetadata: {
    title: data.siteTitle,
    description: data.siteDescription,
    authorFirstName: data.siteAuthorFirstName,
    authorLastName: data.siteAuthorLastName,
    authorShort: data.siteAuthorShort,
    authorSubTitle: data.siteAuthorSubTitle,
    authorSocialMedia: data.siteAuthorSocialMedia,
    authorResumeLink: data.siteAuthorResumeLink,
    authorSkills: data.siteAuthorSkills,
    authorEmail: data.siteAuthorEmail,
    authorTimezone: data.siteAuthorTimezone,
    authorAvailableStartDay: data.siteAuthorAvailableStartDay,
    authorAvailableStartHour: data.siteAuthorAvailableStartHour,
    authorAvailableEndDay: data.siteAuthorAvailableEndDay,
    authorAvailableEndHour: data.siteAuthorAvailableEndHour,
    siteUrl: `https://${data.siteUrl}`,
    siteQuote: data.siteQuote,
    siteQuoteAuthor: data.siteQuoteAuthor
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GA_MEASUREMENT_ID],
        pluginConfig: {
          head: true
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {},
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              quality: 90,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-works`,
        path: `${__dirname}/src/data/works/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-archived`,
        path: `${__dirname}/src/data/archived/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text-sections`,
        path: `${__dirname}/src/data/textSections/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `alexjorgef`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alexjorgef-website`,
        short_name: `website-v4.alexjorgef.com`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/img/portfolio-icon.png`
      }
    },
    `gatsby-plugin-sitemap`
    // `gatsby-plugin-offline`
    // TODO: Fetch GitHub data
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     token: process.env.GATSBY_GITHUB_TOKEN,
    //     graphQLQuery: data.githubApiQuery,
    //     variables: data.githubApiVariables
    //   }
    // },
  ]
}
