import React from 'react';
import ItemCount from '../ItemCount';
import './style.css';

const Item = ({ items }) => {
  return (
    <div className='Item__items--styles'>
      <h3>{items.productName}</h3>
      <img className='item__img--size' src={items.img} alt={items.productName} />
      <p className='item__description--style'>{items.description} </p>
      <b>Stock: {items.stock}</b>
      <ItemCount stock={items.stock} initial={0} />
    </div>
  )
};

export default Item;
