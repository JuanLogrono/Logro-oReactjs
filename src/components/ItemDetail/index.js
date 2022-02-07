import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';

const ItemDetail = () => {
  const { productId } = useParams()
  const [detail, setDetail] = useState([]);
  const [charging, setCharging] = useState(false)
 
  useEffect(() => {
    const URL = `http://localhost:3001/products/${productId}`
    fetch(URL)
    .then((result) => result.json())
    .then((data) => setDetail(data))
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

