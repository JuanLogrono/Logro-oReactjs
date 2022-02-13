import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase'
import { IconoHome } from '../iconos/Iconos'
import { Link } from 'react-router-dom'
import './style.css'


const ViewPurchase = () => {
  const { orderId } = useParams()
  const [itemsPurchased, setItemsPurchased] = useState({})
  const [isLoading, setIsLoading] = useState(false)
 
  useEffect(() => {
    const view = getFirestore().collection("orders").doc(orderId)
    view.get().then((response) => { setItemsPurchased({ ...response.data(), id: response.id }) })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(true))
  }, [orderId])

  return (
    (isLoading) ?
      <div key={itemsPurchased.id} className='view__orderData--style'>
        <h2>Gracias:</h2>
        <h3>{`${itemsPurchased.buyer.name} ${itemsPurchased.buyer.surname}`}, por su compra</h3>
        <p className='purchaseView__resumen--order'>resumen:</p>
        {itemsPurchased.items.map((data) => <div key={data.id} className='view__productData--style'>
          <img src={`../assets/${data.img}`} alt={data.productName} />
          <p><b>Producto:</b> {data.productName}</p>
          <p><b>Cantidad:</b> {data.qty} Un </p>
          <p><b>Total: $</b>{data.qty * data.price}</p>
        </div>)}
        <p className='view_productData--total'>Total Compra: $ {itemsPurchased.total}</p>
        <Link to='/' className='link__purchaseView--order'>Volver <IconoHome/></Link>
      </div>
      : <div>Cargando...</div>
  )
}

export default ViewPurchase