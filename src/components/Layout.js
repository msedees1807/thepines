import React from 'react'
import '../assets/scss/main.scss'
import Hamburger from '../components/Hamburger'
import {
  Container,
  Row,
  Col,
  Visible,
  ScreenClassRender,
} from 'react-grid-system'

import Header from './Header'

export default class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Visible xs>
          <Hamburger />
        </Visible>
        <Header />
        {children}
      </div>
    )
  }
}
