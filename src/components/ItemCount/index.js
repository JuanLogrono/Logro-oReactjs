import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'



const ItemCount = ({ stock, onAdd, add, setAdd }) => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0);
    const [qtyDetail, setQtyDetail] = useState(count)
    const addProduct = () => (count < stock) ? count + 1 : count;
    const subtractProduct = () => (count > 0) ? count - 1 : count;
    function restartCount() {
        setCount(0)
        navigate('/products')
        setAdd(!add)
    }

    if (add) {
        return (
            <div className='onAdd__addItem--order'>
                <div >
                    <div className='ItemCount__count--order'>
                        <button onClick={() => setCount(subtractProduct)}>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(addProduct)}>+</button>
                    </div>
                    <button className='count__addToCart--size' onClick={() => onAdd(count, setQtyDetail)}>Agregar al carrito</button>
                </div>
            </div>)
    } else { return (<><p>Se agregaron {qtyDetail} unidades</p> <button onClick={() => restartCount()}>Continuar compra</button></>) }
};
export default ItemCount;

