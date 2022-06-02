import "./ItemDetail.css"

const ItemDetail = ({ nombre, precio, img }) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <h1>{precio}</h1>
            <h1>{img}</h1>
        </div>
    )
}

export default ItemDetail