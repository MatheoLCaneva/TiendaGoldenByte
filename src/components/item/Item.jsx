import { Card } from "react-bootstrap"
import Contador from "../contador/Contador"
import "./Item.css"


const Item = ({ nombre, precio, img }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Contador inicio={0}></Contador>
            </Card.Body>
        </Card>
    )
}

export default Item