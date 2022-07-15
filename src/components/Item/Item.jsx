import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import "./Item.css"


const Item = ({ nombre, precio, img, id, stock }) => {
    return (
        <Card style={{ width: '18rem', padding: "8px", margin: "5px 10px" }}>
            <Card.Img variant="top" src={img} alt={nombre} />

            <Card.Header>
                <Card.Title>{nombre}</Card.Title>
            </Card.Header>

            <Card.Body className="card-body-item">
                <div className="card-body-top">
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                    <Card.Text>
                        Stock: {stock}
                    </Card.Text>
                </div>
                <div className="card-body-bottom">
                    <Link  to={`/item/${id}/${nombre}`}> <button className="hbtn hb-fill-right-bg-br detalle">Ver Detalle</button> </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item