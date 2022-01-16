import React from 'react'
import { CatalogoContainer } from './CatalogoContainer'
import './style.css'

const Catalogo = () => {
    return (
        <article style={{display:'flex', justifyContent: 'center'}}>
            <CatalogoContainer producto= 'Remera' descripcion='Remera Roja' precio= {2500}/>
            <CatalogoContainer producto= 'Pantalón' descripcion='Pantalón negro' precio= {7000}/>
            <CatalogoContainer producto= 'Bufanda' descripcion='Bufanda Azul' precio= {1500}/>
        </article>
    )
}

export default Catalogo;
