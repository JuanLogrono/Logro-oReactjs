import { useParams } from 'react-router-dom';
import useGetFirestore from '../../Hooks/useGetFirestore';
import Item from './Item';
import "./style.css";

const ItemList = () => {
  const { categoryId } = useParams()

  const { data, isLoading } = useGetFirestore(categoryId)
  if (isLoading) {
    return <b>cargando...</b>
  } else {
    return (<div className="itemList__article--order">
      {data.map((item) => (<Item key={item.id} items={item} />))}

    </div>)
  }
};

export default ItemList;