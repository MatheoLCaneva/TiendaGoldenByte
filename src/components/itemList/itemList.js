import Item from "../item/item";

const ItemList = ({productos}) => {
    return(
        <ul>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList