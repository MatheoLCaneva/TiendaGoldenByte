import "./Contador.css"
import React, {useContext} from "react"
import { Button } from "react-bootstrap"
import { useState } from "react"
import ContextoCarrito from "../../context/CarritoContext"

const Contador = ({ inicio, stock, tipoFlex, agregar }) => {

    const [contador, setContador] = useState(inicio)
    const {estaEnCarrito} = useContext(ContextoCarrito)

    const sumarCantidad = () => {
        if (stock > contador)
            setContador(contador + 1)
        else {
            alert("Se alcanzó el stock disponible")
        }
    }
    const restarCantidad = () => {
        if (contador > 1)
            setContador(contador - 1)
    }

    return (
        <div className="contenedor" style={{ justifyContent: tipoFlex }}>
            <Button className="botonAgregar" variant="primary" onClick={() => { agregar(contador) }}> <span className="agregar">Añadir al Carrito</span></Button>
            <button className="sumar" onClick={sumarCantidad}> + </button>
            <p className="contador">{contador}</p>
            <button className="restar" onClick={restarCantidad}> - </button>
        </div>
    )
}

export default Contador