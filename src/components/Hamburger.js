import React from 'react'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

//This is a floating hamburger menu icon, only shown on mobile (xs) screens.

const styles = {
  Fab: {
    float: 'right',
    margin: '5%',
    bottom: '2vh',
    position: 'fixed',
    right: '2vw',
    zIndex: 1000,
  },
}

export default class Hamburger extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Tooltip title="View Menu">
            <Fab href="./menu" style={styles.Fab}>
              View Menu
            </Fab>
          </Tooltip>
        </div>
      </div>
    )
  }
}
