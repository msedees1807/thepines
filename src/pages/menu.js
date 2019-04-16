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
import MenuCard from '../components/menu/menuCard'
import menuCard from '../components/menu/menuCard'

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

export default class Menu extends React.Component {
  render() {
    return (
      <div style={menuFrame}>
        <h1>Menu</h1>

        <MenuCard />
        <CloseButton />

        <Container>
          <Row>
            <Col sm={4}>
              <table>
                <th>
                  <h2>Breakfast </h2>
                </th>

                <tr>
                  <tc>Toasted Teacake</tc>
                  <tc>£4.99</tc>
                </tr>
                <tr>
                  <tc>Beans on Toast</tc>
                  <tc>£4.99</tc>
                </tr>
                <tr>
                  <tc>Bacon Sandwich</tc>
                  <tc>£4.99</tc>
                </tr>
                <tr>
                  <tc>Sausage Sandwich</tc>
                  <tc>£4.99</tc>
                </tr>
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
        </Container>
      </div>
    )
  }
}
