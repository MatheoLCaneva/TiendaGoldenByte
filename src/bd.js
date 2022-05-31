const productos = [
    {id: '1', nombre: 'Intel Core I5 10400', precio: 30000, img: "./assets/i5.jpg"},
    {id: '2', nombre: 'Memoria Ram Oloy 4gb 3200Mhz', precio: 4000, img: "./assets/memoria.jpg"},
    {id: '3', nombre: 'Gtx 1660 Super', precio: 55000, img: './assets/gtx1660.jpg'}
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}