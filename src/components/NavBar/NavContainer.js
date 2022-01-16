import React from 'react'
import { IconoFlechaMenu } from '../iconos/Iconos';

const NavContainer = ({ titulo, productoUno, productoDos, productoTres }) => {
    return (
        <>
            <li>{titulo}<IconoFlechaMenu/>
                <ul className='ul__lista--mostrar'>
                    <li className='li__opciones--estilos'>{productoUno}</li>
                    <li className='li__opciones--estilos'>{productoDos}</li>
                    <li className='li__opciones--estilos'>{productoTres}</li>
                </ul>
            </li>
        </>
    )
}

export default NavContainer
