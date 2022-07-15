import React from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css"

const ItemList = ({ productos }) => {
    return (
        <ul style={{ display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }} className="listado">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList
