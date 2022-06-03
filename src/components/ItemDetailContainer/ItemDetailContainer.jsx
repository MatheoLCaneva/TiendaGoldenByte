import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { getProducto } from '../../bd'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()

    useEffect(() => {
        getProducto().then(response => {
            setProducto(response)
            for (let i of response){
                console.log(i)
            }
        })}, [])


    return (
        <section>
            <h1>Hola</h1>
        </section>
    )
}

export default ItemDetailContainer