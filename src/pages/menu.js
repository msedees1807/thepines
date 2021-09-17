import React from 'react'

import CloseButton from '../components/menu/closeButton'

import {
  breakfast,
  softRolls,
  burgers,
  fish,
  pies,
  other,
  desserts,
  cakes,
  sideOrders,
  beverages,
} from '../data/menudata'

const pageStyle = {
  background: '#d4d4d430',
  marginBottom: '120px',
}

const menuCard = {
  boxShadow: '0 3px 3px 0 #d6d6d6',
  marginBottom: '30px',
  padding: '25px',
  background: 'white',
  borderRadius: '4px',
}

const menuCardItem = {
  margin: '5px',
  overflow: 'auto',
}

const cardTitle = {
  color: '#005400',
  fontWeight: 'bold',
  textTransform: 'uppercase',
}

const nameStyle = {
  display: 'inline',
  color: '#3e3e3e',
}

const price = {
  float: 'right',
  color: ' #3e3e3e',
}

const description = {
  display: 'block',
}

const MenuItem = ({ item }) => {
  return (
    <div style={menuCardItem}>
      <h4 style={nameStyle}>{item.name}</h4>
      <h4 style={price}>{item.price}</h4>
      <h5 style={description}>{item.description}</h5>
    </div>
  )
}

// Functional component (doesn't need state, super or constructor)
// Export default is used as we only export one function from this file, 'Menu'.

export default class Menu extends React.Component {
  render() {
    return (
      <div style={pageStyle}>
        <div
          className="menuHeader"
          style={{ padding: '15px', textAlign: 'center' }}
        >
          <h1
            className="titleText"
            style={{
              fontSize: '3em',

              marginBottom: '0px',
              whiteSpace: 'nowrap',
            }}
          >
            THE PINES
            <h1 style={{ fontSize: '2rem' }}>Coffee Lounge & Diner</h1>
          </h1>
          <CloseButton />
        </div>
        <div className="menuFrame">
          <div style={menuCard}>
            <h2 style={cardTitle}>Breakfasts & Light Bites</h2>
            {breakfast.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Soft Rolls</h2>
            {softRolls.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Burgers</h2>
            Served with chips, salad and coleslaw
            {burgers.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Fish Dishes</h2>
            Served with chips or new potatoes, peas and salad
            {fish.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Homemade Pies</h2>
            Served with chips or new potatoes, peas and carrots
            {pies.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Other Main Meals</h2>
            Served with chips or new potatoes, peas and carrots
            {other.map(data => (
              <MenuItem item={data} />
            ))}
            <h4 style={cardTitle}>
              Further meals available on our daily specials board.
            </h4>
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Desserts</h2>
            {desserts.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Cakes</h2>
            {cakes.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Side Orders</h2>
            {sideOrders.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2 style={cardTitle}>Beverages</h2>
            {beverages.map(data => (
              <MenuItem item={data} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
