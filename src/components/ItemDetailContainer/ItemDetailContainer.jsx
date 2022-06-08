import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { getProducto } from '../../bd'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const { id } = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        getProducto(1000).then(response => {
            setProducto(response.find(res => res.id == id))
        }).finally(() => {
            setCargando(false)
        })
    }, [])

    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }


    return (
        <section className='infoProducto'>
            <ItemDetail {...producto} />
        </section>
    )
}

export default ItemDetailContainer