import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase'
import './style.css'
const PurchaseForm = () => {
    const navigate= useNavigate()
    const { cartArray, total, setCartArray,setFinishBuy } = useContext(CartContext)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [eMail, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const handleSubmit = (e) => { 
        e.preventDefault()
        let newOrder = {
            buyer: {
                "name": name,
                "surname": surname,
                "eMail": eMail,
                "phone": phone
            },
            items: cartArray,
            total: total
        }
      getFirestore().collection("orders").add(newOrder)
                        .then((response)=>{navigate(`/viewPurchase/${response.id}`)})
                        .finally(()=>setCartArray([]),
                        setFinishBuy(false))
    }


    return (<div className='cart__form--style'>
        <h3>Envíe sus datos para completar la compra </h3>
        <form action="" method='post' className='cart__form--style' onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="surname">Apellido:</label>
            <input type="text" name='surname' onChange={(e)=>setSurname(e.target.value)} />
            <label htmlFor="eMail">E-Mail:</label>
            <input type="email" name='eMail' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" min="8" max="14" name='phone' onChange={(e)=>setPhone(e.target.value)}/>
            <button type='submit' value="Enviar">Enviar</button>
        </form>
    </div>

    )
}

export default PurchaseForm