import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Trash } from '../iconos/Iconos';
import ChangeQty from './ChangeQty';
import './style.css'
const CartContainer = () => {
    const [changeQty, setChangeQty] = useState(false)
    const [modifyProduct, setModifyProduct] = useState({})
    const { cartArray, removeItem, removeAll, buy, total } = useContext(CartContext)
    const navigate = useNavigate()

    const modifyQty = (item) => {
        setModifyProduct(item)
        setChangeQty(true)
    }


    return (
        <div className='cart__div--size'>
            <h3>Productos seleccionados</h3>
            <div className='cart__item--ordenStyle'>
                <h5>seleccionado</h5>
                <h5>Producto</h5>
                <h5>Cantidad</h5>
                <h5>Precio</h5>
                <h5>Total</h5>
            </div>
            {cartArray.map((item) => <div className='cart__item--ordenStyle' key={item.id}>
                <img className='cart__img--size' src={`../assets/${item.img}`} alt={item.productName} />
                <p>{item.productName}</p>
                <p>{item.qty}</p>
                <p>${item.price}</p>
                <b>${item.price * item.qty}</b>
                <button className='button__changeQty--style' onClick={() => modifyQty(item)}>Modificar Cantidad</button>
                <button className='button__trash--style' title='eliminar producto' onClick={() => removeItem(item)}>{<Trash />}</button>

            </div>
            )}
            {(changeQty) && <ChangeQty item={modifyProduct} setChangeQty={setChangeQty} />}
            <p className='cart__buttons--order cart__total--size'>Total=<b>${total}</b></p>
            <div className='cart__buttons--order'>
                <button onClick={() => buy()}>Confirmar Compra</button>
                <button onClick={() => removeAll()}>Eliminar Compra</button>
                <button onClick={(() => navigate('/products'))}>continuar compra</button>
            </div>
        </div>
    )
}

export default CartContainer