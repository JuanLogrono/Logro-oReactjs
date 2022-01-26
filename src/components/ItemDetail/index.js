import React, { useEffect, useState } from 'react';
import { GetItem } from '../ItemList/dataBase';
import ItemDetailContainer from './ItemDetailContainer';

const ItemDetail = () => {
  const [detail, setDetail] = useState([]);
  const [charging, setCharging] = useState(false)
  useEffect(() => {
    GetItem(0).then((result) => setDetail(result))
      .catch((error) => console.error(error))
      .finally(()=>setCharging(true))
    }, []);
    if(charging){
    return (
      <article>
        <ItemDetailContainer key={detail.id} productDetail={detail} />
      </article>
    )
    }else{return <div>cargando...</div>}
}

export default ItemDetail;

