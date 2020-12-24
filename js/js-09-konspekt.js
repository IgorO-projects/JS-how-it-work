// const mango = {
//     name: 'Mango',
//     sales: 5,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     },
//   };
  
//   console.log(mango.sales); // 5
//   console.log(mango.sell('TV')); // Manager Mango sold TV
//   console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
//   console.log(mango.sales); // 7
  
//   const poly = {
//     name: 'Poly',
//     sales: 10,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     },
//   };
  
//   console.log(poly.sales); // 10
//   console.log(poly.sell('TV')); // Manager Poly sold TV
//   console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
//   console.log(poly.sales); // 12

/*********************************************************/ 

// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); 
// console.log(mango.sell('TV')); 
// console.log(mango.sell('Radio')); 
// console.log(mango.sales); 

// console.dir(mango);
// console.log(mango.hasOwnProperty('name'));

/*********************************************************/ 

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// console.dir(dog);
// console.log(dog.hasOwnProperty('barks'));


