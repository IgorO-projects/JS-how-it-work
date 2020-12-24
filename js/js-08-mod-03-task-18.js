// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Пиши код ниже этой строки
//     for(const product of products) {
//       if(productName === product.name) {
//         return product.price;
//       }
//     }
//     return null;
//     // Пиши код выше этой строки
//   }

//   console.log(getProductPrice('Радар'));
//   console.log(getProductPrice('Захват'));
//   console.log(getProductPrice('Сканер'));
//   console.log(getProductPrice('Дроид'));
//   console.log(getProductPrice('Двигатель'));

  /******************************************************************/

//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     const arr = [];
    
//     for(const product of products) {
//         if (product[propName]) {
//             arr.push(product[propName]);
//         }
//     }
//     return arr;
//     // Пиши код выше этой строки
//   }

//   console.log(getAllPropValues('name'));
//   console.log(getAllPropValues('quantity'));
//   console.log(getAllPropValues('price'));
//   console.log(getAllPropValues('category'));

/******************************************************************/

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let totalPrice = 0;
  for(const product of products) {
    if(product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
}
return totalPrice;
    // Пиши код выше этой строки
  }

  console.log(calculateTotalPrice('Бластер'));
  console.log(calculateTotalPrice('Радар'));
  console.log(calculateTotalPrice('Дроид'));
  console.log(calculateTotalPrice('Захват'));
  console.log(calculateTotalPrice('Сканер'));