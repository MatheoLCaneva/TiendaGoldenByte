import { useContext } from "react"
import ContextoCarrito from "../../Context/CarritoContext"
import {Card, Button} from 'react-bootstrap'
import './ItemCart.css'


const ItemCart = ({id, nombre, cant, precio }) => {

    const { eliminarProducto } = useContext(ContextoCarrito)

    const eliminarItem = (id) => {
        eliminarProducto(id)
    }

    return (
        <Card style={{ width: '95%' }}>
            <Card.Body className="card-cuerpo">
                <Card.Title className="card-titulo">{nombre}</Card.Title>
                <Card.Text className="card-texto">Cantidad: {cant}</Card.Text>
                <Card.Text className="card-texto">${precio}</Card.Text>
                <Card.Text className="card-texto">Subtotal: ${precio*cant}</Card.Text>
                <Button variant="danger" onClick={() => eliminarItem(id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCart