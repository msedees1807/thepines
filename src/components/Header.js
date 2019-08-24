import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// style={{
//   fontFamily: 'Libre Baskerville',
//   fontSize: '5rem',
//   color: 'white',
// }}

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
            {/* <Img
              fixed={data.file.childImageSharp.fixed}
              style={
                {
                  //backgroundColor: _palette(accent2, bg),
                  //backgroundAttachment: scroll,fixed,
                  // background-image:		url('images/overlay.png'),			url('../images/bg.jpg');
                  //backgroundPosition: top left, top left,
                  //backgroundRepeat: repeat, no-repeat,
                  //backgroundSize: auto, auto 100%,
                  //color: _palette(accent2, fg),
                  //height: 100%,
                  //left: 0,
                  //padding: ($size-header-pad * 2) $size-header-pad,
                  // position: fixed,
                  //textAlign: right,
                  //top: 0,
                  //width: $size - header - width,
                }
              }
            /> */}
            <div className="inner">
              <h1>
                <strong>Welcome to</strong>
                <br />
                <h1 style={{ fontSize: '3.5em' }}>The Pines</h1>
                <h3>Coffee Lounge & Diner</h3>
                <h5>Established 2002.</h5>
              </h1>
            </div>
            <Footer />
          </header>
        )}
      />
    )
  }
}

export default Header
