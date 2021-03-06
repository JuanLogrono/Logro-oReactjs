import React from 'react'
import { ImCart} from 'react-icons/im'
import { TiArrowSortedDown } from 'react-icons/ti'
import { BsTrash } from 'react-icons/bs'
import './style.css'
import { AiFillCloseCircle, AiTwotoneHome } from 'react-icons/ai'

export const IconoHome = () => {
    return (
        <AiTwotoneHome className='icono__home--estilo' />
    )
}

export const IconoClose = () => {
    return (
        <AiFillCloseCircle className='icono__home--estilo' />
    )
}
export const IconoCarrito = () => {
    return (
        <ImCart className='icono__carrito--estilo' />
    )
};

export const IconoFlechaMenu = () => {
    return (
        <TiArrowSortedDown />
    )
}


export const Trash = () => {
    return (
        <BsTrash className='icono__trash--hover' />
    )
}