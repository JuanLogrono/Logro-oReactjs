import { useNavigate } from 'react-router-dom';
import './style.css';

const Item = ({ items }) => {
  const navigate = useNavigate()
  return (
    <div className='Item__items--styles'>
      <h3>{items.productName}</h3>
      <img className='item__img--size' src={`../assets/${items.img}`} alt={items.productName} />
      <button onClick={(() => navigate(`/products/${items.id}`))}>...ver mas</button>
      <b>Stock: {items.stock}</b>
    </div>
  )
};

export default Item;

