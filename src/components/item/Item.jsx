import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import Contador from "../contador/Contador"
import "./Item.css"


const Item = ({ nombre, precio, img, id, stock }) => {
    return (
        <Card style={{ width: '18rem', padding: "8px"}}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Link style={{textDecoration: "none", color: "black"}} to={`/productos/${id}/${nombre}`}>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                </Link>
                <Contador inicio={0} stock={stock} tipoFlex="space-around"></Contador>
            </Card.Body>
        </Card>
    )
}

export default Item