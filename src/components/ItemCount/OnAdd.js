import { useState } from "react"
import './style.css'

export const OnAdd = ({ count, initial, restartCount }) => {
    const [addCart, setAddCart] = useState(initial);
    const totalItems = () => addCart + count;
    const restart = () => initial;
    const returnInitial = () => (initial);

    return (
        <div className="onAdd__addItem--order">
            <button onClick={() => { setAddCart(totalItems); restartCount(returnInitial) }}>Agregar al carrito </button>
            <div>Cantidad : {addCart}</div>
            <button onClick={() => setAddCart(restart)}>Reiniciar Contador</button>
        </div>
    )
}

