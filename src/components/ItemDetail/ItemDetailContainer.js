import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import './style.css';


const ItemDetailContainer = ({ productDetail }) => {
        const [add, setAdd] = useState(true);
        const { addItem, realStock, changeStock } = useContext(CartContext);
        
        const onAdd = (count) => {
                setAdd(!add)
                addItem(productDetail, count);
        }
        return (
                <div className="ItemDetailContainer__cardDetail--order">
                        <Link to='/products' onClick={()=>changeStock(0)}>X</Link>
                        <img className="itemDetailContainer__img--size" src={productDetail.img} alt={productDetail.productName} />
                        <div className="ItemDetailContainer__descriptionDetail--style">
                                <h2>{productDetail.productName}</h2>
                                <p>{productDetail.description}</p>
                                <p>Precio: ${productDetail.price}</p>
                                <b>Stock disponible  {(realStock > 0) ? realStock : productDetail.stock}</b>
                                <ItemCount stock={productDetail.stock} initial={0} onAdd={onAdd} add={add} setAdd={setAdd} />
                                <Link className="ItemDetailContainer__linkFinalizar--styles" to='/Cart' onClick={()=>changeStock(0)}>Finalizar Compra</Link>
                        </div>
                </div>
        )
}


export default ItemDetailContainer;