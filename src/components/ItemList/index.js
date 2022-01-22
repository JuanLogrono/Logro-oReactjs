import React from 'react'
import { ItemListContainer } from './ItemListContainer'
import './style.css'

const ItemList = () => {
    return (
        <article className='itemList__article--order'>
            <ItemListContainer producto='Remera' descripcion='Remera Roja' precio={2500} stock={10} initial={0} />
            <ItemListContainer producto='Pantalón' descripcion='Pantalón negro' precio={7000} stock={15} initial={0} />
            <ItemListContainer producto='Bufanda' descripcion='Bufanda Azul' precio={1500} stock={20} initial={0} />
        </article>
    )
}

export default ItemList;
