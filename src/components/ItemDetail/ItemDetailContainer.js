import ItemCount from "../ItemCount";
import './style.css'

const ItemDetailContainer = ({ productDetail }) => {
        return (
                <div className="ItemDetailContainer__cardDetail--order">
                        <img className="itemDetailContainer__img--size" src={productDetail.img} alt={productDetail.productName} />
                        <div className="ItemDetailContainer__descriptionDetail--style">
                                <h2>{productDetail.productName}</h2>
                                <p>{productDetail.description}</p>
                                <p>Precio: ${productDetail.price}</p>
                                <b>Stock disponible  {productDetail.stock}</b>
                                <ItemCount stock={productDetail.stock} initial={0}/>
                        </div>
                </div>
        )
}


export default ItemDetailContainer;