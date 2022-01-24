import React, { useEffect, useState } from 'react';
import { GetProducts } from './dataBase';
import Item from './Item';
import './style.css';


const ItemList = () => {
    const [saveProd, setSaveProd] = useState([]);
    useEffect(() => {
        GetProducts().then((result) => setSaveProd(result))
            .catch((error) => console.log(error))
    }, []);
    return (
        <article className='itemList__article--order'>
            {saveProd.map((item) => (
                <Item key={item.id} items={item} />
            ))}
        </article>
    )
}

export default ItemList;
