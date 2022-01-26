import React from 'react';
import './style.css';


const Item = ({ items }) => {
  return (
    <div className='Item__items--styles'>
      <h3>{items.productName}</h3>
      <img className='item__img--size' src={items.img} alt={items.productName} />
      <p className='item__description--style'>{items.description} </p><button>ver</button>
      <b>Stock: {items.stock}</b>
    </div>
  )
};

export default Item;

