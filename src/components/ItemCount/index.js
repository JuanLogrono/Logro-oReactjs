import { useState } from 'react';
import { OnAdd } from './OnAdd';
import './style.css'

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);
    const addProduct = () => (count < stock) ? count + 1 : count;
    const subtractProduct = () => (count > 0) ? count - 1 : count;
    return (
        <div>
            <div className='ItemCount__count--order'>
                <button onClick={() => setCount(subtractProduct)}>-</button>
                <b>{count}</b>
                <button onClick={() => setCount(addProduct)}>+</button>
            </div>
            <OnAdd initial={initial} count={count} restartCount={setCount} />
        </div >
    )
}

export default ItemCount;
