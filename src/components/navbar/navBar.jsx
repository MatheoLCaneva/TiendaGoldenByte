import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import CartIcon from './cartWidget'
import './navBar.css'

const NavBar = () => {
    return <>
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <CartIcon className="cart-widget__icon" />
                    <Navbar.Brand href="#home">Golden Byte</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Ofertas</Nav.Link>
                        <Nav.Link href="#pricing">Proximamente</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
}

export default NavBar