import './ItemDetailContainer.css'
import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../Firebase'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setCargando(true)
        const docRef = doc(db, 'productos', id)
        getDoc(docRef).then(doc => {
            const productoImportado = { id: doc.id, ...doc.data() }
            setProducto(productoImportado)
        }).catch(error => {
            console.log(error)
        }).finally(
            setTimeout(() => {
                setCargando(false)
            }, 500)
        )
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