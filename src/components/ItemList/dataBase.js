export const products = [
    {
        id: '001',
        img: '/assets/001.jpg',
        productName: 'Remera',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 20,
        price: 5000
    },
    {
        id: '002',
        img:'/assets/002.jpg',
        productName: 'Pantalón',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 10,
        price: 9000,
    },
    {
        id: '003',
        img:'/assets/003.jpg',
        productName: 'Bufanda',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 15,
        price: 1500
    },
]


export const GetProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })
}

export const GetItem = (indexDetail) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products[indexDetail]), 2000)
    })
  } 
  
  

