import React from 'react'
import Footer from './Footer'
import { graphql, StaticQuery } from 'gatsby'

class Header extends React.Component {
  render() {
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
        render={data => (
          <header id="header">
            <h1
              className="titleText"
              style={{ fontSize: '3em', color: 'white' }}
            >
              THE PINES
            </h1>
            <h3>Coffee Lounge & Diner</h3>
            <p style={{ color: 'white' }}>Est. 2002</p>
            <p style={{ color: 'white' }}>
              7 Hope Street
              <br />
              Filey
              <br />
              North Yorkshire
              <br />
              YO14 9DJ
            </p>
            <Footer />
          </header>
        )}
      />
    )
  }
}

export default Header
