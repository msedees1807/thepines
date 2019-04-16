import React from 'react'
import { Link } from 'gatsby'

import {
  Container,
  Row,
  Col,
  Visible,
  ScreenClassRender,
} from 'react-grid-system'

import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import tableRow from '../components/menu/menuCard'

// import menudata from '../data/menudata'
// rfc rcc followed by tab creates functional / class components
//lorem40 followed by tab will add test text
// style={{background:'red'}}  inline styles can be applied

const TableRow = styled.tr`
  font-size: 2em;
  color: black;

  @media (max-width: 400px) {
    font-size: 1em;
  }
`

const style = {
  p: {
    color: 'red',
  },
}

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

const menuFrame = {
  marginTop: '5%',
  marginLeft: '10%',
  marginRight: '10%',
}

export default class Menu extends React.Component {
  render() {
    return (
      <div style={menuFrame}>
        <h1>Menu</h1>
        <tableRow />
        <Link to="./">
          <FaTimes style={closeButton} size={40} />
        </Link>

        <p style={style.p}>
          Breaded plaice Whitby breaded scampi Steak pie Meat and potato pie
          Turkey and leek pie Chicken and ham pie Chicken and mushroom pie Mince
          and onion pie Gammon Beef lasagne Apple pie Treacle sponge Sticky
          toffee pudding Spotted dick Apple blackberry crumble Chocolate fudge
          cake Strawberry or chocolate sundae Vanilla ice cream Buttered scone
          Jam and cream scone Muffins Ginger cake or lemon cake Iced buns Jam or
          lemon tarts Biscuits Garlic bread Bread and butter Egg Portion of
          chips Tea Cafe au lait Cappuccino Hot chocolate Cans Mineral water
          various flavours Plastic bottles of pop Glass of cordial
        </p>
        <Container>
          <Row>
            <Col sm={4}>
              <table>
                <th>
                  <h2>Breakfast</h2>
                </th>
                <TableRow>
                  <tc>Toasted Teacake</tc>
                  <tc>£4.99</tc>
                </TableRow>
                <tr>Beans on Toast</tr>
                <tr>Bacon Sandwich</tr>
                <tr> Sausage Sandwich</tr>
              </table>
            </Col>
            <Col sm={4}>
              Cheese Ham Tuna and mayonnaise Prawns with Marie Rose sauce Burger
              Cheese burger Beef burger
            </Col>
            <Col sm={4}>Sausages Chicken nuggets </Col>
          </Row>
          <Row>
            <Col sm={4}>
              Breakfast Soup Toasted tea cake Beans on Toast Bacon sandwich
              Sausage sandwich
            </Col>
            <Col sm={4}>
              Cheese Ham Tuna and mayonnaise Prawns with Marie Rose sauce Burger
              Cheese burger Beef burger
            </Col>
            <Col sm={4}>Sausages Chicken nuggets </Col>
          </Row>
          <Row>
            <Col sm={4}>
              Breakfast Soup Toasted tea cake Beans on Toast Bacon sandwich
              Sausage sandwich
            </Col>
            <Col sm={4}>
              Cheese Ham Tuna and mayonnaise Prawns with Marie Rose sauce Burger
              Cheese burger Beef burger
            </Col>
            <Col sm={4}>Sausages Chicken nuggets </Col>
          </Row>
        </Container>
        <p>
          <span>Your current screen class is </span>
          <Visible xs>
            <strong>Mobile Site</strong>
          </Visible>
          <Visible sm md lg xl>
            <strong>Desktop Site</strong>
          </Visible>

          <span>.</span>
        </p>
        <ScreenClassRender
          render={screenClass => (
            <p
              style={{
                fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem',
              }}
            >
              Screen class: {screenClass}
            </p>
          )}
        />
      </div>
    )
  }
}
