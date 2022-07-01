import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import CartIcon from './CartWidget'
import { Link } from 'react-router-dom'
import './navBar.css'
import { useContext } from 'react'
import ContextoCarrito from '../../Context/CarritoContext'

const NavBar = () => {

    const { total } = useContext(ContextoCarrito)

    return <>
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    {
                        total != 0
                            ? <Link className='carrito' to='/cart' style={{ color: 'black' }}><CartIcon className="cart-widget__icon" /></Link>
                            : <Link className='carrito desactivado' to='/cart' style={{ color: 'black' }}><CartIcon className="cart-widget__icon" /></Link>
                    }

                    <Link style={{ textDecoration: "none" }} to={"/"}><Navbar.Brand>Golden Byte</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Inicio</Link>
                            <Link className='nav-link' to="/categoria/pro">Procesadores</Link>
                            <Link className='nav-link' to="/categoria/ram">Memorias</Link>
                            <Link className='nav-link' to="/categoria/vga">Placas de Video</Link>
                            <Link className='nav-link' to="/categoria/mot">Motherboards</Link>
                            <Link className='nav-link' to="/categoria/gab">Gabinetes</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
}

export default NavBar