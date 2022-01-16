import React from 'react'
import { ImCart, ImSearch } from 'react-icons/im' 
import {TiArrowSortedDown} from 'react-icons/ti'
import './style.css'

export const IconoCarrito = () => {
    return (
        <ImCart className='icono__carrito--estilo'/>
    )
};

export const IconoFlechaMenu=()=>{
    return(
        <TiArrowSortedDown/>
    )
}

export const IconoLupa=()=>{
    return(
        <ImSearch/>
    )
}