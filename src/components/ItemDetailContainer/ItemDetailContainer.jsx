import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
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
            <div>
                <Spinner style={{ marginLeft: "50%", marginTop: "3%", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
            </div>
        )
    }

    return (
        <section className='infoProducto'>
            <ItemDetail {...producto} />
        </section>
    )
}

export default ItemDetailContainer