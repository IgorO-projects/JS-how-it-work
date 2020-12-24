// написать функцию, которая принимает число - степень и возвращает 
// функцию, которая принимает в себя число, которое необходимо возвести в ранее полученую степень.

'use strict';
const spc = '***';

// const makePow = function (n) {

//     const power = function (num) {
//         return Math.pow(num, n)
//     }
//     return power;
// }

// const powTwo = makePow(2);

// console.log('powTwo :', powTwo(2)); // 4
// console.log('powTwo :', powTwo(3)); // 8
// console.log('powTwo :', powTwo(5)); // 25

// console.log(spc);
// const powThree = makePow(3);

// console.log('powThree :', powThree(2)); // 9
// console.log('powThree :', powThree(3)); // 27
// console.log('powThree :', powThree(5)); // 125

// Сделано как по условию задачи
// Замыкание, в данном случае идет вызов функции с присвоением аргумента в переменную powTwo,
// в свою очередь данная функция возвращает уже функцию самого возвода в степень.
// Ниже в консоле идет вызов уже функции power и в нее передается аргумент.

/********************************************/ 

// Здесь Вениамин меняет условия игры, в данном случае функция вышего порядка принимает в себя число,
// которое не обходимо возвевсти в степень в слудующей функции(каллбэк). 
// Каллбэк принимает значение степени в себя.

// const makePow = function (num) {

//     const power = function (n) {
//         return Math.pow(num, n)
//     }
//     return power;
// }

const makePow = (num) => Math.pow.bind(null, num);

const powTwo = makePow(2);

console.log('powTwo :', powTwo(2)); // 4
console.log('powTwo :', powTwo(3)); // 8
console.log('powTwo :', powTwo(5)); // 32

console.log(spc);
const powThree = makePow(3);

console.log('powThree :', powThree(2)); // 9
console.log('powThree :', powThree(3)); // 27
console.log('powThree :', powThree(5)); // 243


