import React from 'react'

import {
  Container,
  Row,
  Col,
  Visible,
  ScreenClassRender,
} from 'react-grid-system'

import styled from 'styled-components'
import CloseButton from '../components/menu/closeButton'

import { breakfast } from '../data/menudata'
import { lightBites } from '../data/menudata'
import { softRolls } from '../data/menudata'
import { burgers } from '../data/menudata'

const TableRow = styled.tr`
  font-size: 2em;
  color: black;

  @media (max-width: 400px) {
    font-size: 1em;
  }
`
const menuFrame = {
  marginTop: '5%',
  marginLeft: '10%',
  marginRight: '10%',
}

const menuCard = {
  boxShadow: '8px 8px 5px #80808014',
}

const menuCardItem = {
  margin: '2%',
}

const price = {
  float: 'right',
}

const MenuItem = props => {
  return (
    <div style={menuCardItem}>
      <h3>{props.item.name}</h3>
      <h3 style={price}>{props.item.price}</h3>
      <h5>{props.item.description}</h5>
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
          {breakfast.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          {lightBites.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          {softRolls.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <div style={menuCard}>
          {burgers.map(data => (
            <MenuItem item={data} />
          ))}
        </div>

        <CloseButton />
      </div>
    )
  }
}
