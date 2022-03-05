import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import logo from "../iconos/imagenes/logo.png"
import './style.css'
import PurchaseForm from './PurchaseForm';
import CartContainer from './CartContainer';

const Cart = () => {

  const { cartArray, finishBuy } = useContext(CartContext);


  if (finishBuy) {
    return (<PurchaseForm />)
  } else {
    return (
      (cartArray.length > 0) ? <CartContainer />
        : <div className='cart__noProduct--style'><Link to='/'><img src={logo} alt="logo nala" /></Link>
          <h3> Todavía no has seleccionado ningún producto</h3>
          <Link className='cart__noProducts--linkStyle' to='/products'>Elegí de nuestro catalogo</Link>
        </div>
    )
  }
}

export default Cart;

