import { createContext, useState } from "react";
import { getFirestore } from "../firebase";


export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);
    const [realStock, setRealStock] = useState(0);
    const [finishBuy, setFinishBuy] = useState(false)

    const changeStock = (n) => setRealStock(n)


    const addItem = (cartItem, qty) => {
        let actStock = 0
        const newProduct = { ...cartItem, qty }
        let i = cartArray.findIndex(item => item.id === newProduct.id)
        if (i > -1) {
            cartArray[i].qty += newProduct.qty
            actStock = cartArray[i].stock - newProduct.qty
            cartArray[i].stock = actStock
        } else {
            actStock = newProduct.stock - newProduct.qty
            newProduct.stock = actStock
            setCartArray((prevState) => [...prevState, newProduct]);
        }
        setRealStock(actStock)
        let newStock = getFirestore().collection('products').doc(newProduct.id)
        newStock.update({ stock: actStock })
    }
    let total = 0
    for (let i in cartArray) {
        total += cartArray[i].price * cartArray[i].qty
    }

    const removeItem = (remove) => {
        let i = cartArray.findIndex(item => item.id === remove.id);
        let actStock = cartArray[i].stock + remove.qty

        let newStock = getFirestore().collection('products').doc(remove.id)
        newStock.update({ stock: actStock })
        const copyCart = cartArray.slice(0, cartArray.length + 1)
        copyCart.splice(i, 1)
        setCartArray(copyCart)
        setRealStock(0)

    }
    const removeAll = () => {
        const db = getFirestore()
        const batch = db.batch()
        let i = 0
        for (i in cartArray) {
            let actStock = cartArray[i].stock + cartArray[i].qty
            let newStock = db.collection('products').doc(cartArray[i].id)
            batch.update(newStock, { stock: actStock })
        }
        batch.commit();
        setCartArray([])
    }

    const buy = () => {
        setFinishBuy(true)
    }

    return (
        <CartContext.Provider value={{ cartArray, setCartArray, addItem, removeItem, removeAll, realStock, changeStock, buy, finishBuy, setFinishBuy, total }}>{children}</CartContext.Provider>
    )
}