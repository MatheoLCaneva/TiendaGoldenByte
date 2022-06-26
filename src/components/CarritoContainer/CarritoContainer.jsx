import React, { useEffect } from "react"
import { useContext } from "react"
import ContextoCarrito from "../../Context/CarritoContext"
import ItemCart from "../ItemCart/ItemCart"
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CarritoContainer.css'
import { useState } from "react"

const CarritoContainer = () => {

    const { carrito, vaciarCarrito, total, cantidad } = useContext(ContextoCarrito)
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
    }, [carrito])

    const vaciar = () => {
        vaciarCarrito()
        setCargando(true)
        setTimeout(() => {
            setCargando(false)
        }, 2000)
    }

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }   

    if (!cantidad) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Su carrito se encuentra vacio</h1>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Podes chequear nuestros productos clickeando el siguiente boton</h3>
                <Link to='/' style={{ textAlign: 'center' }}><Button> Productos </Button></Link>
            </div>
        )

    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Aca va a ir el detalle del carrito</h1>
            <ul>
                {carrito.map(prod => <ItemCart key={prod.id} {...prod} />)}
            </ul>
            <p style={{ textAlign: 'center' }}>Total: ${total}</p>
            <div className="botones">
                <Button variant="success">Finalizar Compra</Button>
                <Button variant="warning" onClick={vaciar}>Vaciar Carrito</Button>
            </div>
        </div>


    )
}

export default CarritoContainer