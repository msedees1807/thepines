import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Welcome to</strong>
            <br />
            <h1
              style={{
                fontFamily: 'Libre Baskerville',
                fontSize: '5rem',
                color: 'white',
              }}
            >
              The Pines
            </h1>
            <h2>Coffee Lounge & Diner</h2>
            <h5>Est. '03</h5>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
