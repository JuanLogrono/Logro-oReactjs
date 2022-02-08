import {  useState } from 'react';
import './style.css'



const ItemCount = ({ stock, onAdd, add, setAdd}) => {
    const [count, setCount] = useState(0);
    const [qtyDetail,setQtyDetail]=useState(count)
    const addProduct = () => (count < stock) ? count + 1 : count;
    const subtractProduct = () => (count > 0) ? count - 1 : count;
    function restartCount() {
    setAdd(!add);
    setCount(0)
 }
    
    if(add){return (
        <div className='onAdd__addItem--order'>
            <div className='ItemCount__count--order'>
             <button onClick={() => setCount(subtractProduct)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(addProduct)}>+</button>
                <button onClick={()=>onAdd(count,setQtyDetail)}>Agregar al carrito</button>
            </div>
        </div>)
             }else{return (<><p>Se agregaron {qtyDetail} unidades</p> <button onClick={()=>restartCount()}>Agregar</button></>)}
   };
    export default ItemCount;
    
    