import React from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

const closeButton = {
  color: 'grey',
  textDecoration: 'none',
  float: 'right',
  margin: '5%',
  top: 0,
  position: 'fixed',
  right: 10,
  background: 'white',
}

export default class CloseButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="./">
          <FaTimes style={closeButton} size={40} />
        </Link>
      </div>
    )
  }
}
