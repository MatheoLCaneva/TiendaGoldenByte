import './itemListContainer.css'
import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ mensaje }) => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        const coleccion = idCategoria ? (
            query(collection(db, 'productos'), where('idCategoria', '==', idCategoria))
        ) : (collection(db, 'productos'))

        getDocs(coleccion).then(response => {
            const productosImportados = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProductos(productosImportados)
        }).catch(error => {
            console.log(error)
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