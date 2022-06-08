import gtx1660 from "./assets/gtx1660.jpg"
import i5 from "./assets/i5.jpg"
import memoriaoloy from "./assets/memoria.jpg"
import gabinete from "./assets/medusa.jpg"
import mother from "./assets/motherboard.jpg"


const productos = [
    { idCategoria: 'pro', id: 'pro-1', nombre: 'Procesador Intel Core I5 10400', precio: 30000, stock: 7, img: i5, descripcion: "Este Core i5-10400 es un procesador de seis núcleos físicos y doce hilos de proceso gracias a la tecnología HyperThreading que funcionan a una velocidad base de 2,9 GHz y que llega a los 4,3 GHz Boost en un solo núcleo (4,0 GHz en todos los núcleos)." },
    { idCategoria: 'ram', id: 'ram-1', nombre: 'Memoria Ram Oloy 4gb 3200Mhz', precio: 4000, stock: 4, img: memoriaoloy, descripcion: "Memoria Ram con frecuencia de 3200MHZ para disfrutar de un rendimiento óptimo, su capacidad permite la conexión doble para lograr así Dual-Channel y efectivizar su uso. " },
    { idCategoria: 'vga', id: 'vga-1', nombre: 'Placa de Video Gtx 1660 Super', precio: 55000, stock: 5, img: gtx1660, descripcion: "Contamos con una tarjeta con 1.408 núcleos CUDA con una frecuencia de reloj de 1.530 MHz y una frecuencia máxima de 1.785 MHz. El único cambio destacable es la memoria integrada, que antes era GDDR5 y que ahora es GDDR6." },
    { idCategoria: 'mot', id: 'mot-1', nombre: 'Motherboard Asus H510m-E Prime 1200', precio: 12000, stock: 6, img: mother, descripcion: "Madre ASUS PRIME H510M-E, Chipset Intel H510, Soporta: Core de 11va y 10ma generación, Socket 1200, Memoria: DDR4 3200(OC) / 2666 / 2133 MHz , 64GB Max, Integrado: AudioHD, Red, USB 3.0 y SATA 3.0, M. 2, Micro-ATX, Ptos: 1xPCIEx16, 2xPCIEx1." },
    { idCategoria: 'gab', id: 'gab-1', nombre: 'Gabinete Xigmatek Medusa X1 Fan', precio: 6000, stock: 3, img: gabinete, descripcion: "ATX, USB3.0x1 + USB2.0x2, Parrilla de malla FP y Vidrio templado izquierda, 1 PCS XDS120 Ventilador Led Con colores tornasolado arco iris fijos no configurables" }

]

export const getProducto = (tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, tiempo)
    })
}