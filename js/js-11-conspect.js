// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num < 5));
// console.log(numbers.filter(num => num === 5));

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];

//   const activeUsers = users.filter(user => user.isActive);
//   const inactiveUsers = users.filter(user => !user.isActive);

//   console.table(activeUsers);
//   console.table(inactiveUsers);

//   const users1 = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
//     { id: '004', name: 'Mango', isActive: true },
//     { id: '005', name: 'Poly', isActive: false },
//     { id: '006', name: 'Ajax', isActive: true },
//     { id: '007', name: 'Chelsey', isActive: false },
//     { id: '008', name: 'Mango', isActive: true },
//     { id: '009', name: 'Poly', isActive: false },
//     { id: '010', name: 'Ajax', isActive: true },
//     { id: '011', name: 'Chelsey', isActive: false },
//   ];

//   const idUser = '009';
//   const wantedUser = users1.find(user => user.id === idUser);

//   console.log(wantedUser);

//   const fooSearch = (arr, id) => arr.find(user => user.id === id);

//   console.log(fooSearch(users1, '005'));
//   console.log(fooSearch(users1, '010'));

//   const isEnoughBig = val => val >= 10;

//   const arrNumbers = [12, 5, 8, 130, 44];

//   console.log(arrNumbers.every(isEnoughBig));
//   console.log(arrNumbers.some(isEnoughBig));

//   const fruits = [
//     { name: 'apples', amount: 100 },
//     { name: 'bananas', amount: 0 },
//     { name: 'grapes', amount: 50 },
//   ];

//   const allAvailableProduct = fruits.every(fruit => fruit.amount > 0);
//   const AvailableProduct = fruits.some(fruit => fruit.amount > 0);

//   console.log(allAvailableProduct);
//   console.log(AvailableProduct);

//   const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

//   const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

//   console.log(likes);

//   const likeCounter = arr => arr.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

//   console.log(likeCounter(tweets));

//   const getTags = arr => arr.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);

//       return allTags;
//   }, []);

//   console.log(getTags(tweets));

//   const tags = getTags(tweets);

//   const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }
  
//     acc[tag] += 1;
  
//     return acc;
//   };
  
//   // Начальное значение аккумулятора это пустой объект {}
//   const countTags = tags => tags.reduce(getTagStats, {});
  
//   const tagCount = countTags(tags);
//   console.log(tagCount);

// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]

// const sortedclients = clients.sort();
// console.log('After sort: ', sortedclients); // ["Ajax", "Chelsey", "Mango", "Poly"]
// console.log(clients === sortedclients);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);
// console.log(even);
// const doubled = even.map(x => x * 2);
// console.log(doubled);
// const reversed = doubled.reverse();
// console.log(reversed);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

const result = numbers
  .filter(x => x % 2 === 0)
  .map(y => y * 2)
  .reverse();

console.log(result);