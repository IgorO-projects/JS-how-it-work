// Пример 01 - дефолтные значение параметров функции 
// Написать функцию greet(mane), которая будет получать имя клиента,
// Если имя будет найдено в массиве - логировать троку "`Привет, ${name}!`", 
// а в случае отсутсвия клиент "Привет, гость!"

const persones = ['Mango', 'Kiwi', 'Ajax', 'Poly'];

// const greet = function (name) {

//     let greeting = 'Привет, гость!';

//     if(persones.includes(name)) {

//         greeting = `Привет, ${name}!`;

//     }

//     return greeting;
// };

// console.log(greet('Apollo'));
// console.log(greet('Kiwi'));
// console.log(greet('Ajax'));
// console.log(greet('Poly'));

/************************************************************************************************/ 
// ниже вариант если не используется массив имен. Также вариант, если клиент не ввел свое имя. 

// олдскульный метод, уже не используется.

// const greet = function (name) {

//     const greeting = `Привет, ${name || 'гость'}!`;

//     console.log(greeting);
// }

// новый метод, благодаря ECMAScript6 

const greet = function (name = 'гость') {

    const greeting = `Привет, ${name}!`;

    console.log(greeting);
}

greet();
greet('Kiwi');
greet('Ajax');
greet('Poly');