import React from 'react'
import HamburgerIcon from '../../public/icons/hamburger.png'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

//This is a floating hamburger menu icon, only shown on mobile (xs) screens.

const styles = {
  Fab: {
    marginLeft: '10%',
    marginTop: '80vh',
    float: 'left',
    position: 'fixed',
    zIndex: 1000,
  },
}

export default class Hamburger extends React.Component {
  handleClick() {
    this.setState({ open: !this.state.open })
    console.log('open:' + this.state.open)
  }

  render() {
    this.state = {
      open: false,
    }

    return (
      <div>
        {this.state.open ? (
          <div>
            <Tooltip title="View Menu">
              <Fab
                href="./menu"
                style={styles.Fab}
                onClick={this.handleClick.bind(this)}
              >
                <img src={HamburgerIcon} />
              </Fab>
            </Tooltip>
          </div>
        ) : (
          <div>
            <Tooltip title="View Menu">
              <Fab style={styles.Fab} onClick={this.handleClick.bind(this)}>
                <img src={HamburgerIcon} />
              </Fab>
            </Tooltip>
          </div>
        )}
      </div>
    )
  }
}
