import React from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

export default class CloseButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="./">
          <FaTimes className="closeButton" size={56} />
        </Link>
      </div>
    )
  }
}
