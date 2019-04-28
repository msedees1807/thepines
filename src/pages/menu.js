import React from 'react'

import CloseButton from '../components/menu/closeButton'

import { breakfast } from '../data/menudata'
import { lightBites } from '../data/menudata'
import { softRolls } from '../data/menudata'
import { burgers } from '../data/menudata'

const menuFrame = {
  marginTop: '5%',
  marginLeft: '10%',
  marginRight: '10%',
}

const menuCard = {
  boxShadow: '15px 15px 15px 5px #80808014',
  margin: '8%',
  padding: '2%',
}

const menuCardItem = {
  margin: '2%',
  overflow: 'auto',
}

const name = {
  display: 'inline',
}

const price = {
  float: 'right',
}

const description = {
  display: 'block',
}

const MenuItem = props => {
  return (
    <div style={menuCardItem}>
      <h3 style={name}>{props.item.name}</h3>
      <h3 style={price}>{props.item.price}</h3>
      <h5 style={description}>{props.item.description}</h5>
    </div>
  )
}

// Functional component (doesn't need state, super or constructor)
// Export default is used as we only export one function from this file, 'Menu'.

export default class Menu extends React.Component {
  render() {
    return (
      <div style={menuFrame}>
        <h1>Menu</h1>

        <div style={menuCard}>
          <h2>Breakfasts</h2>
          {breakfast.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          <h2>Light Bites</h2>
          {lightBites.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          <h2>Soft Rolls</h2>
          {softRolls.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          <h2>Burgers</h2>
          {burgers.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <CloseButton />
      </div>
    )
  }
}
