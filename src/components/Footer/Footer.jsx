import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div className='footer'>
            <hr />
            <div className="footer-contenido">
                <div className="descripcion-footer">
                    <p>
                        Estamos ubicados en Caballito, Buenos Aires. Somos una tienda iniciada en Agosto del 2020. Queremos brindarte el mejor servicio para que te lleves la Pc de tus sueños.
                    </p>
                </div>
                <div className="productos">`
                    <ul>
                        <li><Link className='nav-link' to="/">Inicio</Link></li>
                        <li><Link className='nav-link' to="/categoria/pro">Procesadores</Link></li>
                        <li><Link className='nav-link' to="/categoria/ram">Memorias</Link></li>
                        <li><Link className='nav-link' to="/categoria/vga">Placas de Video</Link></li>
                        <li><Link className='nav-link' to="/categoria/mot">Motherboards</Link></li>
                        <li> <Link className='nav-link' to="/categoria/gab">Gabinetes</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Footer