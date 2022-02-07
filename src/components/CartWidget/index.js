import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './style.css'

const CartWidget = () => {
  const { cartArray } = useContext(CartContext)

  let qtyCart = cartArray.length
  return (
    (qtyCart>0)?<div className='widget__cart--styles'>{qtyCart}</div>:null
  )
};

export default CartWidget;
