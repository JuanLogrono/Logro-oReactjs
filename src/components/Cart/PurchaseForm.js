import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase'
import { IconoClose } from '../iconos/Iconos'
import { useForm } from 'react-hook-form'
import './style.css'

const PurchaseForm = () => {
    const navigate = useNavigate()
    const { cartArray, total, setCartArray, setFinishBuy } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        let timestamp = Date()
        let date = new Date(timestamp)
        let today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} : ${date.getHours()}:${date.getMinutes()}hs`

        let newOrder = {
            buyer: { "name": data.name, "surname": data.surname, "eMail": data.eMail, "phone": data.phone },
            items: cartArray,
            date: today,
            total: total
        }
        getFirestore().collection("orders").add(newOrder)
            .then((response) => { navigate(`/viewPurchase/${response.id}`) })
            .finally(() => setCartArray([]),
                setFinishBuy(false))
    }


    return (
        <div>
            <form className='cart__form--style' onSubmit={handleSubmit(onSubmit)}>
                <button className='buyForm__buttonClose--order' onClick={() => setFinishBuy(false)}><IconoClose /></button>
                <h3>Envíe sus datos para completar la compra </h3>
                <label htmlFor="name">Nombre:</label>
                <input name='name' {...register('name', { pattern:/[A-Za-z]\w/, required: true })} />
                {errors.name && <p className='form__error--style'>ingrese un Nombre valido por favor</p>}

                <label htmlFor="surname">Apellido:</label>
                <input name='surname' {...register('surname', { pattern: /[A-Za-z]\w/, required: true })} />
                {errors.surname && <p className='form__error--style'>ingrese un Apellido valido por favor</p>}

                <label htmlFor="phone">Teléfono: </label>
                <input name='phone' placeholder='XXXX-XXXX sin prefijos' {...register('phone', { pattern: /[0-9]{4}-[0-9]{4}/, required: true })} />
                {errors.phone && <p className='form__error--style'>inserte un numero de teléfono valido por favor</p>}

                <label htmlFor="eMail">E-Mail:</label>
                <input name='eMail' {...register('eMail', { pattern: /^[Ññ-\w.%+]{1,64}@(?:[A-ZñÑ0-9-]{1,63}\.){1,125}[A-ZñÑ]{2,63}$/i, required: true })} />
                {errors.eMail && <p className='form__error--style'>ingrese un e-mail valido por favor</p>}

                <button type='submit' value="Enviar">Enviar</button>
            </form>
        </div>
    );
}

export default PurchaseForm