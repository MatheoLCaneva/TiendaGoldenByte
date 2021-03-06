import "./ItemDetail.css"
import ContextoCarrito from "../../Context/CarritoContext"
import Contador from "../Contador/Contador"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useContext, useState } from "react"

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { agregarProducto } = useContext(ContextoCarrito)


    const añadirCarrito = (cant) => {
        agregarProducto({ id, nombre, precio, cant })
        setCantidadAgregada(cant)

    }
    return (
        <div className="producto">
            <div className="imagen">
                <img style={{ maxWidth: "100%" }} src={img} alt="" />
            </div>
            <div className="producto-info">
                <h3>{nombre}</h3>
                <h3 className="precio">Precio transferencia o efectivo ${precio}</h3>
                {
                    cantidadAgregada === 0
                        ? stock > 0
                            ? <Contador inicio={1} stock={stock} tipoFlex="space-between" agregar={añadirCarrito} />
                            : <Button className="botonStock" variant="secondary" size="lg" disabled>Fuera de Stock</Button>

                        : <Link className="aparecer " to='/cart'> <Button className="btnFinalizar" variant="info">Finalizar Compra</Button> </Link>

                }

            </div>
            <div className="descripcion">
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}

export default ItemDetail
