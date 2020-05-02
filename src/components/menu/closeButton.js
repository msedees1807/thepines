import React from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

const styles = {
  Fab: {
    float: 'right',
    margin: '5%',
    bottom: '9vh',
    position: 'fixed',
    right: '2vw',
    zIndex: 1000,
  },
}

export default class CloseButton extends React.Component {
  render() {
    return (
      <div style={styles.Fab}>
        <Link to="./">
          <FaTimes className="closeButton" size={56} />
        </Link>
      </div>
    )
  }
}
