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
            Welcome to
            <h1 className="titleText" style={{ fontSize: '3em' }}>
              THE PINES
            </h1>
            <h3>Coffee Lounge & Diner</h3>
            <p>Est. 2002</p>
            <h4>
              7 Hope Street
              <br />
              Filey
              <br />
              North Yorkshire
              <br />
              YO14 9DJ
            </h4>
            <Footer />
          </header>
        )}
      />
    )
  }
}

export default Header
