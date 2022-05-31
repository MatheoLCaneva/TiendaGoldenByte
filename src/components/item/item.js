import { Card } from "react-bootstrap"


const Item = ({ nombre, precio, img }) => {
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={url} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: {precio}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Item