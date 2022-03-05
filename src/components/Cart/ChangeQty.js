import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './style.css'

const ChangeQty = ({ item, setChangeQty }) => {
    const [newQty, setNewQty] = useState(0)
    const { addItem, removeItem } = useContext(CartContext)
    const addNewQty = () => setNewQty((prev) => (newQty < item.stock) ? prev + 1 : newQty);
    const subNewQty = () => setNewQty((prev) => (newQty > 0) ? prev - 1 : newQty);

    const outChange = () => {
        setChangeQty(false)
        setNewQty(0)
    }

    const confirmChange = () => {
        if (newQty === 0) {
            removeItem(item)
        } else {
            let qty = newQty - item.qty
            addItem(item, qty)
            outChange()
        }
    }
    return (
        <div className='cart__changeQty--style'>
            <div className='changeQty__description--order'>
                <p>{item.productName}</p>
                <p>Cantidad: {item.qty} unidades</p>
                <div className='changeQty__qty--style'>Nueva cantidad: <button onClick={() => subNewQty()}>-</button><b>{newQty}</b><button onClick={() => addNewQty()}>+</button>unidades</div>
            </div>
            <div className='changeQty__button--order'><button onClick={() => confirmChange()}>Confirmar cambio</button>
                <button onClick={() => outChange()}>Cancelar</button></div>
        </div>
    )
}

export default ChangeQty