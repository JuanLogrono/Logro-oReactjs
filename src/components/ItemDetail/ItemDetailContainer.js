import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount, { SendCartButton } from "../ItemCount";
import './style.css';


const ItemDetailContainer = ({ productDetail }) => {
        const [add, setAdd] = useState(true);
        const [addToCart, setAddToCart]=useState()

        const onAdd = () => {
                setAdd(false)
                setAddToCart(productDetail.id)
        }
        console.log(addToCart)
        return (
                <div className="ItemDetailContainer__cardDetail--order">
                        <Link to='/products'>X</Link>
                        <img className="itemDetailContainer__img--size" src={productDetail.img} alt={productDetail.productName} />
                        <div className="ItemDetailContainer__descriptionDetail--style">
                                <h2>{productDetail.productName}</h2>
                                <p>{productDetail.description}</p>
                                <p>Precio: ${productDetail.price}</p>
                                <b>Stock disponible  {productDetail.stock}</b>
                                <ItemCount stock={productDetail.stock} initial={1} add={add} /> 
                                {(add)? <SendCartButton onAdd={onAdd} /> : <button onClick={() => setAdd(true)}>seguir agregando</button>}
                                <Link className="ItemDetailContainer__linkFinalizar--styles" to='/Cart'>Finalizar Compra</Link>
                        </div>
                </div>
        )
}


export default ItemDetailContainer;