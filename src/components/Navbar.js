import React from 'react'
import {
  Container,
  Row,
  Col,
  Visible,
  ScreenClassRender,
} from 'react-grid-system'

const Navbar = () => (
  <div>
    <Visible xs>
      <div style={{ background: 'red' }}>
        <h1>Nav for phone</h1>
      </div>
    </Visible>

    <Visible sm md lg xl>
      <div style={{ background: '#333' }}>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </Visible>
  </div>
)

export default Navbar
