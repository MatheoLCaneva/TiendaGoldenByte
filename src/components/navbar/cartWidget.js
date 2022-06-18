import React, { useContext } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ContextoCarrito from '../../context/CarritoContext'


const CartIcon = () => {

    const { cantidad } = useContext(ContextoCarrito)

    return (
        <div style={{ marginRight: ".5rem" }}>
            <Icon style={{ cursor: "pointer" }} icon={faShoppingCart} />
            <p style={{ display: "inline-block", margin: "0" }}>{cantidad}</p>
        </div>
    );
}

export default CartIcon