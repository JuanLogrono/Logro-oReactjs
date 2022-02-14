import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { IconoClose } from "../iconos/Iconos";
import ItemCount from "../ItemCount";
import './style.css';


const ItemDetailContainer = ({ productDetail }) => {
        const [add, setAdd] = useState(true);
        const { addItem, realStock, changeStock } = useContext(CartContext);
        
        const onAdd = (count, setQtyDetail) => {
                setAdd(!add)
                setQtyDetail((prevState)=>prevState+count)
                addItem(productDetail, count);
        }
        return (
                <div className="ItemDetailContainer__cardDetail--order">
                        <img className="itemDetailContainer__img--size" src={`../assets/${productDetail.img}`} alt={productDetail.productName} />
                        <div className="ItemDetailContainer__descriptionDetail--style">
                                <h2>{productDetail.productName}</h2>
                                <p>{productDetail.description}</p>
                                <p>Precio: ${productDetail.price}</p>
                                <b>Stock disponible  {(realStock > 0) ? realStock : productDetail.stock}</b>
                                <ItemCount stock={(realStock > 0) ? realStock : productDetail.stock} initial={0} onAdd={onAdd} add={add} setAdd={setAdd} />
                             {(add===false)&&<Link className="ItemDetailContainer__linkFinalizar--styles" to='/Cart' onClick={()=>changeStock(0)}>Finalizar Compra</Link>}
                        </div>
                        <Link className="detail__close--order" to='/products' onClick={()=>changeStock(0)}><IconoClose/></Link>
                </div>
        )
}


export default ItemDetailContainer;