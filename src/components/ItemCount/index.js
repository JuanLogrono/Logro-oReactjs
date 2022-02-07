import { useState } from 'react';
import './style.css'



const ItemCount = ({ stock, onAdd, add, setAdd}) => {
    const [count, setCount] = useState(1);
    const addProduct = () => (count < stock) ? count + 1 : count;
    const subtractProduct = () => (count > 0) ? count - 1 : count;
    if(add){return (
        <div className='onAdd__addItem--order'>
            <div className='ItemCount__count--order'>
             <button onClick={() => setCount(subtractProduct)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(addProduct)}>+</button>
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>)
             }else{return (<><p>Se agregaron {count} unidades</p> <button onClick={()=> setAdd(!add)}>Seguir Agregando</button></>)}
   };
    export default ItemCount;
    
    