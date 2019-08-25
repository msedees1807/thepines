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
            {/* <h1>
              Welcome to
              <br />
              <h1 style={{ fontSize: '3em' }}>The Pines</h1>
              <h3>Coffee Lounge & Diner</h3>
              <h5>Established 2002.</h5>
            </h1> */}
            <h3>Welcome to</h3>
            <h1 style={{ fontSize: '3em' }}>THE PINES</h1>
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
