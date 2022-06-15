import "./Contador.css"
import React from "react"
import { Button } from "react-bootstrap"
import { useState } from "react"

const Contador = ({inicio, stock, tipoFlex, agregar}) => {

    const [contador, setContador] = useState(inicio)

    const sumarCantidad = () => {
        if (stock > contador)
        setContador(contador + 1)
        else{
            alert("Se alcanzó el stock disponible")
        }
    }
    const restarCantidad = () => {
        if ( contador > 1 )
        setContador( contador - 1 )
    }

    return (
        <div className="contenedor" style={{justifyContent: tipoFlex}}>
            <Button variant="primary" onClick={() => { agregar(contador) }}>Añadir al Carrito</Button>
            <button className="sumar" onClick={sumarCantidad}> + </button>
            <p className="contador">{contador}</p>
            <button className="restar" onClick={restarCantidad}> - </button>
        </div>
    )
}

export default Contador