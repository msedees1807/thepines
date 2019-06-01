import React from 'react'

import CloseButton from '../components/menu/closeButton'

import {
  breakfast,
  lightBites,
  softRolls,
  burgers,
  fish,
  pies,
  other,
  desserts,
  childrensChoice,
  cakes,
  sideOrders,
  beverages,
} from '../data/menudata'

const menuCard = {
  boxShadow: '15px 15px 15px 5px #80808014',
  margin: '8%',
  padding: '2%',
}

const menuCardItem = {
  margin: '2%',
  overflow: 'auto',
}

const nameStyle = {
  display: 'inline',
}

const price = {
  float: 'right',
}

const description = {
  display: 'block',
}

const MenuItem = ({ item }) => {
  return (
    <div style={menuCardItem}>
      <h3 style={nameStyle}>{item.name}</h3>
      <h3 style={price}>{item.price}</h3>
      <h5 style={description}>{item.description}</h5>
    </div>
  )
}

// Functional component (doesn't need state, super or constructor)
// Export default is used as we only export one function from this file, 'Menu'.

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menuHeader">
          <h1 className="menuTitle">Menu</h1>
          <CloseButton />
        </div>
        <div className="menuFrame">
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

          <div style={menuCard}>
            <h2>Fish Dishes</h2>
            {fish.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Homemade Pies</h2>
            {pies.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Other Main Meals</h2>
            <h3>Further meals available on our daily specials board.</h3>
            {other.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Children's Choice</h2>
            {childrensChoice.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Desserts</h2>
            {desserts.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Cakes</h2>
            {cakes.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Side Orders</h2>
            {sideOrders.map(data => (
              <MenuItem item={data} />
            ))}
          </div>

          <div style={menuCard}>
            <h2>Beverages</h2>
            {beverages.map(data => (
              <MenuItem item={data} />
            ))}
          </div>
        </div>
      </>
    )
  }
}
