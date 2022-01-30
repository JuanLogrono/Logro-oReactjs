import { useState, useEffect } from 'react';
import Item from './Item';


const ItemList = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    let URL =`http://localhost:3001/products`;
    fetch(URL).then((respuesta) => respuesta.json())
      .then((itemData) => setProductData(itemData))
      .catch((err)=>console.error(err))
      .finally(()=>setIsLoading(true))
  }, []);
 if(isLoading){
  return( <div className="itemList__article--order">
    {productData.map((item) => (<Item key={item.id} items={item} />))}
  </div>)} else return <b>cargando...</b>
  };

export default ItemList;
