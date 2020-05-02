import React from 'react'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

//This is a floating hamburger menu icon, only shown on mobile (xs) screens.

const styles = {
  Fab: {
    float: 'right',
    margin: '5%',
    bottom: '6vh',
    position: 'fixed',
    right: '2vw',
    zIndex: 1000,
  },
  Text: {
    fontSize: '0.75rem',
    textAlign: 'center',
    lineHeight: '1.5',
    margin: '0px',
  },
}

export default class Hamburger extends React.Component {
  render() {
    return (
      <div>
        <Tooltip title="View Menu">
          <Fab href="./menu" style={styles.Fab}>
            <p style={styles.Text}>View Menu</p>
          </Fab>
        </Tooltip>
      </div>
    )
  }
}
