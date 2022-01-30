import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Item = ({ items }) => {
  const navigate=useNavigate()
  return (
    <div className='Item__items--styles'>
      <h3>{items.productName}</h3>
      <img className='item__img--size' src={items.img} alt={items.productName} />
      <p className='item__description--style'>{items.description} </p><button onClick={(()=>navigate(`/products/${items.id}`))}>ver</button>
      <b>Stock: {items.stock}</b>
    </div>
  )
};

export default Item;

