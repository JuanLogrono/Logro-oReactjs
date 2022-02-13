import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemDetailContainer from './ItemDetailContainer';

const ItemDetail = () => {
  const { productId } = useParams()
  const [detail, setDetail] = useState([]);
  const [charging, setCharging] = useState(false)

  useEffect(() => {
    const details = getFirestore().collection("products").doc(productId)
    details.get().then((response) => { setDetail({ ...response.data(), id: response.id }) })
      .catch((error) => console.error(error))
      .finally(() => setCharging(true))      
  }, [productId]);

  if (charging) {
    return (
      <article>
        <ItemDetailContainer key={detail.id} productDetail={detail} />
      </article>
    )
  } else { return <div>cargando...</div> }
}

export default ItemDetail;


