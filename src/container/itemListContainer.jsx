import './itemListContainer.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { getProducto } from '../bd'
import ItemList from '../components/itemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const ItemListContainer = ({ mensaje }) => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
        setCargando(true)
        getProducto(2000).then(response => {
            if (idCategoria == undefined)
                setProductos(response)
            else {
                setProductos(response.filter(prod => prod.idCategoria == idCategoria))
            }
        }).finally(() => {
            setCargando(false)
        })
    }, [idCategoria])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }

    return (
        <section>
            <h1 className="titulo">{mensaje}</h1>
            <ItemList productos={productos} />
        </section>
    )
}

export default ItemListContainer