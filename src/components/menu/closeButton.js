import React from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

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

export default class CloseButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="./">
          <FaTimes style={closeButton} size={40} />
        </Link>
      </div>
    )
  }
}

// import styled from 'styled-components'

// const closeButton = {
//   color: 'grey',
//   colorhover: 'black',
//   textDecoration: 'none',
//   float: 'right',
//   margin: '5%',
//   top: 0,
//   position: 'fixed',
//   right: 10,
//   background: 'white',
// }

// const XButton = () => (
//   <div>
//     <Link to="./">
//       <FaTimes style={closeButton} size={40} />
//     </Link>
//   </div>
// )

// const StyledButton = styled(XButton)`
//   color: 'red';
// `

// export default class CloseButton extends React.Component {
//   render() {
//     return <StyledButton />
//   }
// }
