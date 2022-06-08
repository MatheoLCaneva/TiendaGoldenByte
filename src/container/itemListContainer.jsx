import './itemListContainer.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../bd'
import ItemList from '../components/itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ mensaje }) => {

    const { idCategoria } = useParams()

    if (idCategoria == undefined)
        console.log("hola")

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducto(2000).then(response => {
            setProductos(response.filter(a => a.id == 1))
        })
    }, [])

    return (
        <section>
            <h1 className="titulo">{mensaje}</h1>
            <ItemList productos={productos} />
        </section>
    )
}

export default ItemListContainer