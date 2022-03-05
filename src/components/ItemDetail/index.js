import React from 'react';
import { useParams } from 'react-router-dom';
import useGetFirestore from '../../Hooks/useGetFirestore';
import ItemDetailContainer from './ItemDetailContainer';
import "./style.css"

const ItemDetail = () => {
  const { productId } = useParams()
  const { data, isLoading } = useGetFirestore(productId)



  if (isLoading) {
    return <div>cargando...</div>
  } else {
    return (
      <article>
        <ItemDetailContainer key={data.id} productDetail={data} />
      </article>
    )
  }
}
export default ItemDetail;


