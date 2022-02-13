import React from 'react'
import { getFirestore } from '../../firebase'





const products= [
    {
      "productName": "Buzo Negro",
      "price": 1500,
      "stock": 10,
      "description": "Buzo negro con capucha",
      "search": "buzo negro negra capucha hombre",
      "orden": 4,
      "img": "h1.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Remera negra",
      "price": 1500,
      "stock": 18,
      "description": "remera negra manga corta",
      "search": "remera negro negra manga corta hombre",
      "orden": 4,
      "img": "h2.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "jean negro",
      "price": 3500,
      "stock": 10,
      "description": "pantalón jean negro",
      "search": "pantalon jean negro negra hombre",
      "orden": 7,
      "img": "h3.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Buzo blanco",
      "price": 3100,
      "stock": 20,
      "description": "buzo blanco con capucha",
      "search": "buzo blanco blanca con capucha canguro hombre",
      "orden": 10,
      "img": "h4.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "jean blanco",
      "price": 2900,
      "stock": 30,
      "description": "pantalon de jaen blanco",
      "search": "pantalon jean blanco blanca hombre",
      "orden": 13,
      "img": "h5.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Remera blanca",
      "price": 2100,
      "stock": 10,
      "description": "rojo, amarillo , gris",
      "search": "remera blanco blanca manga corta hombre",
      "orden": 16,
      "img": "h6.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Buzo azul",
      "price": 3150,
      "stock": 15,
      "description": "buzo azul con capucha",
      "search": "buzo azul con capucha canguro hombre",
      "orden": 19,
      "img": "h7.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Remera azul",
      "price": 950,
      "stock": 20,
      "description": "Remera azul manga corta",
      "search": "remera azul manga corta hombre",
      "orden": 22,
      "img": "h8.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "jean azul",
      "price": 3400,
      "stock": 25,
      "description": "pantalón jean azul",
      "search": "pantalon jean azul hombre",
      "orden": 25,
      "img": "h9.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Buzo rojo",
      "price": 2900,
      "stock": 25,
      "description": "buzo rojo con capucha",
      "search": "buzo rojo con capucha canguro hombre",
      "orden": 28,
      "img": "h10.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Remera roja",
      "price": 1000,
      "stock": 30,
      "description": "remera roja manga corta",
      "search": "remera rojo roja manga corta hombre",
      "orden": 31,
      "img": "h11.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Jean rojo",
      "price": 850,
      "stock": 10,
      "description": "pantalón de jean rojo",
      "search": "pantalon jean rojo roja hombre",
      "orden": 34,
      "img": "h12.jpg",
      "categoryId": "hombre"
    },
    {
      "productName": "Buzo negro",
      "price": 2500,
      "stock": 15,
      "description": "Buzo negro con capucha",
      "search": "buzo negro negra con capucha canguro mujer",
      "orden": 2,
      "img": "m1.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Remera negra",
      "price": 900,
      "stock": 20,
      "description": "remera negra manga corta",
      "search": "remera negro negra manga corta mujer",
      "orden": 5,
      "img": "m2.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Jean negro",
      "price": 3900,
      "stock": 25,
      "description": "pantalon de jean negro",
      "search": "pantalon jean negro negra mujer",
      "orden": 8,
      "img": "m3.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Buzo blanco",
      "price": 2200,
      "stock": 25,
      "description": "buzo blanco con capucha",
      "search": "buzo blanco blanca con capucha canguro mujer",
      "orden": 11,
      "img": "m4.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Remera blanca",
      "price": 960,
      "stock": 30,
      "description": "remera blanca manga corta",
      "search": "remera blanco blanca manga corta mujer",
      "orden": 14,
      "img": "m5.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Jean blanco",
      "price": 3600,
      "stock": 10,
      "description": "pantalon de jean blanco",
      "search": "pantalon jean blanco blanca mujer",
      "orden": 17,
      "img": "m6.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Buzo azul",
      "price": 2100,
      "stock": 15,
      "description": "buzo azul con capucha",
      "search": "buzo azul con capucha canguro mujer",
      "orden": 20,
      "img": "m7.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Remera azul",
      "price": 800,
      "stock": 20,
      "description": "remera azul sin mangas",
      "search": "remera azul sin manga mujer",
      "orden": 23,
      "img": "m8.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Jean azul",
      "price": 3700,
      "stock": 25,
      "description": "Pantalón de jean azul",
      "search": "pantalon jean azul mujer",
      "orden": 26,
      "img": "m9.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Buzo Rojo",
      "price": 2150,
      "stock": 25,
      "description": "buzo rojo con capucha",
      "search": "buzo rojo con capucha canguro mujer",
      "orden": 29,
      "img": "m10.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Remera roja",
      "price": 860,
      "stock": 30,
      "description": "remera roja manga corta",
      "search": "remera rojo roja manga corta mujer",
      "orden": 32,
      "img": "m11.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "jean rojo",
      "price": 3100,
      "stock": 10,
      "description": "pantalon de jean rojo",
      "search": "pantalon jean rojo roja mujer",
      "orden": 35,
      "img": "m12.jpg",
      "categoryId":"mujer"
    },
    {
      "productName": "Guantes blancos",
      "price": 400,
      "stock": 15,
      "description": "guantes blancos de lana",
      "search": "guantes blanco blanca lana accesorios",
      "orden": 3,
      "img": "a1.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "guantes negros",
      "price": 500,
      "stock": 20,
      "description": "guantes negros de lana",
      "search": "guantes negro negra lana accesorios",
      "orden": 6,
      "img": "a2.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Guantes azules",
      "price": 550,
      "stock": 25,
      "description": "Guantes azules de lana",
      "search": "guantes azul lana accesorios",
      "orden": 9,
      "img": "a3.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Guantes rojos",
      "price": 350,
      "stock": 25,
      "description": "Guantes rojos de lana",
      "search": "guantes rojo roja lana accesorios",
      "orden": 12,
      "img": "a4.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Bufanda negra",
      "price": 700,
      "stock": 30,
      "description": "bufanda negra de lana",
      "search": "bufanda negra negro lana accesorios",
      "orden": 15,
      "img": "a5.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Bufanda blanca",
      "price": 750,
      "stock": 10,
      "description": "bufanda blanca de lana",
      "search": "bufanda blanco blanca lana accesorios",
      "orden": 18,
      "img": "a6.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Bufanda azul",
      "price": 600,
      "stock": 15,
      "description": "bufanda azul de lana",
      "search": "bufanda azul lana accesorios",
      "orden": 21,
      "img": "a7.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Bufanda roja",
      "price": 650,
      "stock": 20,
      "description": "bufanda roja de lana",
      "search": "bufanda rojo roja lana accesorios",
      "orden": 24,
      "img": "a8.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Gorro negro",
      "price": 490,
      "stock": 25,
      "description": "gorro negro de lana",
      "search": "gorro negro negra lana accesorios",
      "orden": 27,
      "img": "a9.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Gorro blanco",
      "price": 360,
      "stock": 25,
      "description": "gorro blanco de lana",
      "search": "gorro blanco blanca lana accesorios",
      "orden": 30,
      "img": "a10.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Gorro azul",
      "price": 320,
      "stock": 30,
      "description": "gorro azul de lana",
      "search": "gorro azul lana accesorios",
      "orden": 33,
      "img": "a11.jpg",
      "categoryId":"accesorios"
    },
    {
      "productName": "Gorro rojo",
      "price": 310,
      "stock": 10,
      "description": "gorro rojo de lana",
      "search": "gorro rojo roja lana accesorios",
      "orden": 36,
      "img": "a12.jpg",
      "categoryId":"accesorios"
    }
  ]


const CargaProductos = () => {
    const cargarProductos=()=>{
     
       products.forEach((prod)=>{getFirestore().collection("products").add(prod)})

    }
  return (
    <div><button onClick={()=>cargarProductos()}>cargar</button></div>
  )
}

export default CargaProductos;
