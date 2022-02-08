import { createContext, useState } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    
    const [cartArray, setCartArray] = useState([]);
    const [realStock, setRealStock] = useState(0);
    const [finishBuy,setFinishBuy] = useState(false)
    const changeStock=(n)=>setRealStock(n)
    
    
    const addItem = (cartItem, qty) => {
        let actStock = 0
        const newProduct = { ...cartItem, qty }
        let i = cartArray.findIndex(item => item.id === newProduct.id)
        if (i > -1) {
            cartArray[i].qty += newProduct.qty
            actStock = cartArray[i].stock - newProduct.qty
            cartArray[i].stock= actStock
        } else {
            actStock= newProduct.stock - newProduct.qty
            newProduct.stock=actStock
            setCartArray((prevState) => [...prevState, newProduct]);
        }
        setRealStock(actStock)
            fetch(`http://localhost:3001/products/${newProduct.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: 'PATCH',
            body: JSON.stringify({ stock: actStock })
        })
        
    }

    const removeItem = (remove) => {
        let i = cartArray.findIndex(item => item.id === remove.id);
        let actStock = cartArray[i].stock + remove.qty
        fetch(`http://localhost:3001/products/${remove.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: 'PATCH',
            body: JSON.stringify({ stock: actStock })
        })
        const copyCart = cartArray.slice(0, cartArray.length + 1)
        copyCart.splice(i, 1)
        setCartArray(copyCart)
        setRealStock(0)

    }
    const removeAll = () => {
        let i = 0
        for (i in cartArray){
                let actStock = cartArray[i].stock + cartArray[i].qty
            fetch(`http://localhost:3001/products/${cartArray[i].id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: 'PATCH',
                body: JSON.stringify({ stock: actStock })
            })
        }           
        setCartArray([])
    }
    const buy =()=>{
        setCartArray([])
        setFinishBuy(true)
        setTimeout(() => {
            setFinishBuy(false)
            }, 3000);
    }
    return (
        <CartContext.Provider value={{ cartArray, addItem, removeItem, removeAll, realStock, changeStock, buy, finishBuy }}>{children}</CartContext.Provider>
    )
}