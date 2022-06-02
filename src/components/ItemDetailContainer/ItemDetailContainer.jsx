import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { getProducto } from '../../bd'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducto().then(response => {
            setProductos(response)
        })
    }, [])

    console.log(useParams)

    return (
        <section>
            <h1>Hola</h1>
        </section>
    )
}

export default ItemDetailContainer