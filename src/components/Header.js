import React from 'react'
import Footer from './Footer'
import { graphql, StaticQuery } from 'gatsby'

const Text = ({ children }) => {
  return <p style={{ color: 'white' }}>{children}</p>
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          file(relativePath: { eq: "bg.jpg" }) {
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={() => (
        <header id="header">
          <div>
            <h1
              className="titleText"
              style={{
                fontSize: '3em',
                color: 'white',
                marginBottom: '0px',
                whiteSpace: 'nowrap',
              }}
            >
              THE PINES
              <h1 style={{ fontSize: '2rem', color: 'white' }}>
                Coffee Lounge & Diner
              </h1>
            </h1>

            <p style={{ color: 'white' }}>Est. 2002</p>
            <Text>
              7 Hope Street
              <br />
              Filey
              <br />
              North Yorkshire
              <br />
              YO14 9DJ
              <br />
            </Text>
            <Text>
              <span aria-label="Call phone number 07875 079361" role="link">
                Tel: 07875 079361
              </span>
            </Text>
          </div>
          <Footer />
        </header>
      )}
    />
  )
}

export default Header
