export const products = [
    {
        id: '001',
        img: '/assets/001.jpg',
        productName: 'Remera',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 20
    },
    {
        id: '002',
        img:'/assets/002.jpg',
        productName: 'Pantalón',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 10
    },
    {
        id: '003',
        img:'/assets/003.jpg',
        productName: 'Bufanda',
        description: 'Reprehenderit elit est labore eu dolore cillum ipsum proident veniam. Fugiat elit laboris est commodo nisi eiusmod esse mollit nisi velit. Aliquip laboris nostrud incididunt proident sit occaecat magna. Officia ea et deserunt aliqua magna nostrud laboris pariatur cillum id voluptate. Ut mollit reprehenderit incididunt eu cillum pariatur aliqua cupidatat. Sint occaecat velit pariatur elit qui nulla proident anim tempor ad incididunt qui.' ,
        stock: 15
    },
]

export const GetProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })
}


  
  

