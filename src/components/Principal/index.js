import React, { useEffect, useState } from 'react';
import Item from '../ItemList/Item';
import banner from  '../iconos/imagenes/banner.jpg';
import './style.css';
import { getFirestore } from '../../firebase';

const Home = () => {
   const [principalData, setPrincipalData] = useState([])
    const [isLoading, setIsLoading]=useState(false);
    useEffect(() => {
        const collectionData= getFirestore().collection('products').limit(4)
    collectionData.get().then((response) =>(response.empty)?console.log("vacío"): setPrincipalData(response.docs.map((item)=>({...item.data(), id: item.id}))))
                        .catch((err)=> console.error(err))
                        .finally(()=>setIsLoading(true))
    }, []);
    if (isLoading){
    return <article className='principal__article--order'>
        <img className='principal__img--size' src={banner} alt='banner'/>
       {principalData.map((info) => <Item key={info.id} items={info}/>)} 
    </article>
    } else return <b>cargando...</b> 
};

export default Home;

        /* const URL = "http://localhost:3001/products?_limit=4";
        fetch(URL).then((res) => res.json())
            .then((data) => setPrincipalData(data)) */