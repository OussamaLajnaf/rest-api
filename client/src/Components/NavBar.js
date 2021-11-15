import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = ({text, setText, stars}) => {
    return (
        <div>
     <Navbar style={{backgroundColor:"rgb(100, 15, 67)"}}>
    <Container>
    <Navbar.Brand href="#home"style={{color:"white"}}>REST-API</Navbar.Brand>
    <Nav className="me-auto">
      <form>
          <input value={text} onChange={e=>setText(e.target.value)}/>
      </form>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar

