import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import Item from './Item';


const ItemList = () => {
  const {categoryId}=useParams()
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
    const db = getFirestore();
    let collectionData=""
     if (categoryId){ 
       collectionData = db.collection('products').where("categoryId","==",categoryId)
 
   } else { console.log(categoryId); collectionData = db.collection('products')}
     collectionData.get().then((response) =>(response.empty)?console.log("vacío"): setProductData(response.docs.map((item)=>({...item.data(), id: item.id}))))
                          .catch((err)=>console.log("error",err))
                          .finally(()=>setIsLoading(true))                          
  }, [categoryId]);

  if (isLoading) {
    return (<div className="itemList__article--order">
      {productData.map((item) => (<Item key={item.id} items={item} />))}
    </div>)
  } else return <b>cargando...</b>
};

export default ItemList;

