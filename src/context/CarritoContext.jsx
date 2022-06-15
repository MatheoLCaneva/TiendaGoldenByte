import { useState, createContext, useEffect } from "react";

const ContextoCarrito = createContext()

export const CarritoL = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        let cantidad = 0
        carrito.forEach(prod => {
            cantidad += prod.cant
        })
        setCantidad(cantidad)
    }, [carrito])

    const agregarProducto = (producto) => {
        if (!estaEnCarrito(producto.id)) {
            setCarrito([...carrito, producto])
        }
    }

    const eliminarProducto = (id) => {
        const carritoSinProducto = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoSinProducto)
    }

    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    return (
        <ContextoCarrito.Provider value={{
            carrito,
            cantidad,
            agregarProducto,
            eliminarProducto,
            estaEnCarrito,
        }}>
            {children}
        </ContextoCarrito.Provider>
    )

}

export default ContextoCarrito