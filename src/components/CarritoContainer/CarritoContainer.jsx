import React, { useEffect } from "react"
import { useContext } from "react"
import ContextoCarrito from "../../Context/CarritoContext"
import ItemCart from "../ItemCart/ItemCart"
import { Button, Spinner, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CarritoContainer.css'
import { useState } from "react"
import { setDoc, doc, addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from "../../Firebase"
import swal from "sweetalert"

const CarritoContainer = () => {

    const { carrito, vaciarCarrito, total, cantidad } = useContext(ContextoCarrito)
    const [cargando, setCargando] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const finalizarCompra = () => {
        const correo = document.querySelector(".input-correo").value
        const nombre = document.querySelector(".input-nombre").value
        const apellido = document.querySelector(".input-apellido").value
        const celular = document.querySelector(".input-celular").value
        const usuario = { correo, nombre, apellido, celular }
        const items = { carrito }
        cargarDatoBD(usuario, items, total)

    }

    const cargarDatoBD = (usuario, items, total) => {
        setCargando(true)

        const refColeccion = collection(db, "productos")

        const batch = writeBatch(db)
        const ids = carrito.map(prod => prod.id)
        const noStock = []

        getDocs(query(refColeccion, where(documentId(), "in", ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const datos = doc.data()

                    const producto = carrito.find(prod => prod.id === doc.id)
                    const cantidadProducto = producto.cant

                    if (datos.stock >= cantidadProducto) {
                        batch.update(doc.ref, { stock: datos.stock - cantidadProducto })
                    } else {
                        noStock.push({ id: doc.id, ...datos })
                    }
                })
            }).then(() => {
                if (noStock.length === 0) {
                    const refColeccion = collection(db, "ventas")
                    return addDoc(refColeccion, {
                        usuario, items, total
                    })
                } else {
                    return Promise.reject({ type: "out_of_stock", products: noStock })
                }

            }).then(({ id }) => {
                batch.commit()
                vaciarCarrito()
                swal({
                    title: "Muchas gracias!",
                    text: `Su orden fue generada con éxito. Su número de pedido es: ${id}`,
                    icon: "success",
                    button: "Aceptar",
                });
            }).catch(error => {
                if (error.type === "out_of_stock") {
                    swal({
                        title: "Ha ocurrido un problema",
                        text: `Uno o más productos no disponen de stock`,
                        icon: "error",
                        button: "Aceptar",
                    });
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setCargando(false)
            })
    }



    const vaciar = () => {
        vaciarCarrito()
        setCargando(true)
        setTimeout(() => {
            setCargando(false)
        }, 2000)
    }


    if (cargando) {
        return (
            <Spinner style={{ position: "absolute", margin: "auto", left: "0", top: "0", bottom: "0", right: "0", width: "51px", height: "51px" }} animation="border" role="status"></Spinner>
        )
    }

    if (!cantidad) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Su carrito se encuentra vacio</h1>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Podes chequear nuestros productos clickeando el siguiente boton</h3>
                <Link to='/' style={{ textAlign: 'center' }}><Button> Productos </Button></Link>
            </div>
        )

    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="nombre@ejemplo.com"
                                autoFocus
                                className="input-correo"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Su Nombre" className="input-nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Su Apellido" className="input-apellido" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Número Telefónico</Form.Label>
                            <Form.Control type="text" placeholder="Celular" className="input-celular" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={finalizarCompra}>
                        Confirmar Orden
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1 style={{ textAlign: 'center' }}>Aca va a ir el detalle del carrito</h1>
            <ul>
                {carrito.map(prod => <ItemCart key={prod.id} {...prod} />)}
            </ul>
            <p style={{ textAlign: 'center' }}>Total: ${total}</p>
            <div className="botones">
                <Button variant="success" onClick={handleShow}>Finalizar Compra</Button>
                <Button variant="warning" onClick={vaciar}>Vaciar Carrito</Button>
            </div>
        </div>


    )
}

export default CarritoContainer