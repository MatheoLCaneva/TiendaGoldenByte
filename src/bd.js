import gtx1660 from "./assets/gtx1660.jpg"
import i5 from "./assets/i5.jpg"
import memoriaoloy from "./assets/memoria.jpg"
import gabinete from "./assets/medusa.jpg"
import mother from "./assets/motherboard.jpg"


const productos = [
    {id: '1', nombre: 'Procesador Intel Core I5 10400', precio: 30000, img: i5},
    {id: '2', nombre: 'Memoria Ram Oloy 4gb 3200Mhz', precio: 4000, img: memoriaoloy},
    {id: '3', nombre: 'Placa de Video Gtx 1660 Super', precio: 55000, img: gtx1660},
    {id: '4', nombre: 'Motherboard Asus H510m-E Prime 1200', precio: 12000, img: mother},
    {id: '5', nombre: 'Gabinete Xigmatek Medusa X1 Fan', precio: 6000, img: gabinete}
    
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}