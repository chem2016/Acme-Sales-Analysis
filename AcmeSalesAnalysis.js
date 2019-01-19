function productsPurchased(orders, products){
    let purchasedProductID = orders.reduce((acc,product)=>{
        if(!acc.includes(product.productId)){
            acc.push(product.productId);
        }
        return acc;
    },[])
    //console.log(purchasedProductID);-> log [1,5]
    products.forEach(product => {
        if(purchasedProductID.includes(product.id)){
            console.log(product.name);
        }
    }); 
}

function topSellingProductByQuantity(orders, products){
    let productsWithQuantity = products.map((product)=>{
        product.quantity = 0;
        orders.forEach((order)=>{
            if(order.productId === product.id){
                product.quantity += order.quantity; 
            }
        })
        return product;
    })
    // console.log(productsWithQuantity); log products with quant as a key
    let topSellingProduct = productsWithQuantity.sort((a,b) => b.quantity - a.quantity)[0].name;
    console.log(topSellingProduct);
}



function usersWithOrders(users, orders){
    let userIdArray = orders.reduce((acc, order)=>{
        if(!acc.includes(order.userId)){
            acc.push(order.userId);
        }
        return acc;
    },[])
    // console.log(userIdArray); log userId [1,3]
    users.forEach((user)=>{
        if(userIdArray.includes(user.id)){
            console.log(user.name);
        }
    })
}

const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
];
  
  // productId matches up with product in products
  // userId matches up with user in users
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];

console.log(productsPurchased(orders, products)); // logs foo and bar products

console.log(topSellingProductByQuantity(orders, products));//logs bazz product

console.log(usersWithOrders(users, orders));//logs info on moe and curly