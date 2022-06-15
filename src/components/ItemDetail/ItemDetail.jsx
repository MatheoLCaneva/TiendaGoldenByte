import "./ItemDetail.css"
import ContextoCarrito from "../../context/CarritoContext"
import Contador from "../contador/Contador"
import { useContext, useState } from "react"

const ItemDetail = ({id, nombre, precio, img, stock, descripcion }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { agregarProducto } = useContext(ContextoCarrito)
    const {carrito} = useContext(ContextoCarrito)
    

    const añadirCarrito = (cant) => {
        console.log(`se agregaron ${cant} ${nombre}`)
        agregarProducto({id, nombre, precio, cant})
        console.log(carrito)
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
                <Contador inicio={1} stock={stock} tipoFlex="space-between" agregar={añadirCarrito} />
            </div>
            <div className="descripcion">
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}

export default ItemDetail