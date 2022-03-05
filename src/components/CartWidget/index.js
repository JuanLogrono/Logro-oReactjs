import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './style.css'

const CartWidget = () => {
  const { cartArray } = useContext(CartContext)
  let qtyCart = 0
  cartArray.forEach(data => { qtyCart += data.qty });
  return (
    (qtyCart > 0) ? <div className='widget__cart--styles'>{qtyCart}</div> : null
  )
};

export default CartWidget;
