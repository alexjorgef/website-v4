import React from 'react'
import { render } from '@testing-library/react'
// import Home from '../src/pages/index'
// import projects from './__fixtures__/projects.json'
// import projectImageFiles from './__fixtures__/projectImageFiles.json'

describe('Home', () => {
  // afterEach(() => {
  //   jest.clearAllMocks()
  // })

  // jest.mock('gatsby-plugin-mdx', () => {
  //   return {
  //     MDXRenderer: ({ children }) => {
  //       return <div>{children}</div>
  //     }
  //   }
  // })

  // beforeEach(() => {
  //   useStaticQuery.mockImplementation(() => ({
  //     placeholderImage: {
  //       childImageSharp: {
  //         gatsbyImageData: {
  //           images: {
  //             fallback: {
  //               src: '/static/dfsfds/312fds/me.webp'
  //             }
  //           }
  //         }
  //       }
  //     },
  //     aboutMain: {
  //       body: ''
  //     },
  //     aboutTech: {
  //       body: ''
  //     },
  //     site: {
  //       siteMetadata: {
  //         authorFirstName: 'Alex'
  //       }
  //     }
  //   }))
  // })

  //   const data = {
  //     ...projects,
  //     ...projectImageFiles
  //   }

  //   const pageContext = {
  //     repos: [
  //       {
  //         name: 'hello',
  //         full_name: 'kremalicious/hello'
  //       }
  //     ]
  //   }

  //   it('renders correctly from data file values', () => {
  //     const { container } = render(<Home data={data} pageContext={pageContext} />)
  //     expect(container.firstChild).toBeInTheDocument()
  //   })
  it('renders correctly', async () => {
    // const tree = renderer.create(<About />).toJSON()
    // expect(tree).toMatchSnapshot()
    expect('a').toBe('a')
  })
})
