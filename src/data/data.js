module.exports = {
  siteTitle: 'CZ Space',
  siteAuthorFirstName: 'Changpeng',
  siteAuthorLastName: 'Zhao',
  siteAuthorShort: 'CZ',
  siteAuthorSubTitle: 'Entrepreneur',
  siteAuthorEmail: 'support@coinbase.com',
  siteAuthorTimezone: 0,
  siteAuthorAvailableStartDay: 1,
  siteAuthorAvailableStartHour: '10:00',
  siteAuthorAvailableEndDay: 5,
  siteAuthorAvailableEndHour: '19:30',
  siteUrl: 'alexjorgef.vercel.app',
  siteAuthorResumeLink:
    'https://github.com/posquit0/Awesome-CV/raw/master/examples/cv.pdf',
  siteAuthorSocialMedia: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mark-cuban-06a0755b/',
      showAbout: true,
      showFooter: true
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/torvalds',
      showAbout: true,
      showFooter: true
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      url: 'https://gitlab.com/gitlab-org',
      showAbout: true,
      showFooter: true
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/cristiano/',
      showAbout: true,
      showFooter: true
    },
    {
      id: 'keybase',
      name: 'Keybase',
      url: 'https://keybase.io/chris',
      showAbout: true,
      showFooter: false
    }
  ],
  siteAuthorSkills: [
    {
      name: 'Languages',
      technologies: ['C', 'C++', 'Python']
    },
    {
      name: 'Front-End libraries and frameworks',
      technologies: ['Angular.js', 'Electron']
    },
    {
      name: 'Back-End libraries and frameworks',
      technologies: ['Node.js', 'Flask']
    },
    {
      name: 'Markup and templating',
      technologies: ['HTML', 'CSS']
    },
    {
      name: 'Data and databases',
      technologies: ['MySQL', 'PL/SQL']
    },
    {
      name: 'Testing frameworks',
      technologies: ['Cypress']
    },
    {
      name: 'Data visualization',
      technologies: ['Gnuplot']
    },
    {
      name: 'Tooling and infrastructure',
      technologies: ['Git', 'Docker', 'Puppet', 'CircleCI']
    },
    {
      name: 'Other',
      technologies: ['Three.js', 'D3.js', 'Hugo']
    }
  ],
  siteQuote:
    "The only reason for time is so that everything doesn't happen at once.",
  siteQuoteAuthor: 'Albert Einstein',
  siteDescription: 'A personal portfolio website'
  // TODO: Fetch GitHub data
  // githubApiQuery: `query ($number_of_repos: Int!) {
  //   viewer {
  //     name
  //     avatarUrl
  //     isHireable
  //     resourcePath
  //     repositories(
  //       last: $number_of_repos,
  //       privacy: PUBLIC,
  //       isFork: false,
  //       ownerAffiliations: OWNER,
  //       orderBy: { field: STARGAZERS, direction: ASC }
  //     ) {
  //       nodes {
  //         name
  //         description
  //         url
  //         homepageUrl
  //         forkCount
  //         createdAt
  //         updatedAt
  //         resourcePath
  //         languages(last: 1, orderBy: { field: SIZE, direction: ASC } ) {
  //           edges {
  //             node {
  //               name
  //               color
  //             }
  //           }
  //         }
  //         licenseInfo {
  //           name
  //         }
  //         stargazers {
  //           totalCount
  //         }
  //       }
  //     }
  //   }
  // }`,
  // githubApiVariables: {
  //   number_of_repos: 12
  // }
}
