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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
}

export default NavBar