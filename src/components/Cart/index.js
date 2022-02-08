import React, { useContext } from 'react';
import { Link, useNavigate, } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import logo from "../iconos/imagenes/logo.png"
import './style.css'
import {Trash} from '../iconos/Iconos'

const Cart = () => {
    const navigate=useNavigate()
    const { cartArray, removeItem, removeAll, buy, finishBuy} = useContext(CartContext);
    let total= 0
    for( let i in cartArray){
        total+=cartArray[i].price * cartArray[i].qty
    }

    if (finishBuy){
      return <div className='cart__buy--finish'><h1>Gracias Por su compra</h1></div>
    }else{
return(
        (cartArray.length>0)?<div className='cart__div--size'>
        <h3>Productos seleccionados</h3>
        <div className='cart__item--ordenStyle'>
            <h5>seleccionado</h5>
            <h5>Producto</h5>
            <h5>Cantidad</h5>
            <h5>Precio</h5>
            <h5>Total</h5>
        </div>
        {cartArray.map((item) => <div className='cart__item--ordenStyle' key={item.id}>
            <img className='cart__img--size' src= {item.img} alt={item.productName}/>
            <p>{item.productName}</p>
            <p>{item.qty}</p>
            <p>${item.price}</p>
            <b>${item.price * item.qty}</b>
            <button className='button__trash--style' onClick={() => removeItem(item)}>{<Trash/>}</button>
        </div>
        )}
        <p className='cart__buttons--order cart__total--size'>Total=<b>${total}</b></p>
        <div className='cart__buttons--order'>
        <button onClick={()=>buy()}>Confirmar Compra</button>
        <button onClick={()=>removeAll("")}>Eliminar Compra</button>
        <button onClick={(()=>navigate('/products'))}>continuar compra</button>
        </div>
    </div>: 
    <div className='cart__noProduct--style'><Link to='/'><img src={logo} alt="logo nala" /></Link>
        <h3> Todavía no has seleccionado ningún producto</h3>
        <Link className='cart__noProducts--linkStyle' to='/products'>Conoce nuestros Productos</Link>
        </div>
    )
}}

export default Cart;
