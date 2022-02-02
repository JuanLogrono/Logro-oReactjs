import React, { useState } from 'react';
import './style.css'



const ItemCount = ({ stock, initial, add }) => {
    const [count, setCount] = useState(initial);
    const addProduct = () => (count < stock) ? count + 1 : count;
    const subtractProduct = () => (count > 0) ? count - 1 : count;
    if (add) {
        console.log(add)
        return (
        <div className='onAdd__addItem--order'>
            <div className='ItemCount__count--order'>
                <button onClick={() => setCount(subtractProduct)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(addProduct)}>+</button>

            </div>
        </div>)
        }else{ 
            return  <><p>Productos Añadidos:{count}</p></>
        }
    };
    export default ItemCount;
    
    
    export const SendCartButton = ({ onAdd }) => {
        return (
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        )
    }