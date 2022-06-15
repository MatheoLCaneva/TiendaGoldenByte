import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import "./Item.css"


const Item = ({ nombre, precio, img, id }) => {
    return (
        <Card style={{ width: '18rem', padding: "8px" }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/item/${id}/${nombre}`}> <button className="hbtn hb-fill-right-bg-br">Ver Detalle</button> </Link>
            </Card.Body>
        </Card>
    )
}

export default Item