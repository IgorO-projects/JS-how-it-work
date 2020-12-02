// написать цикл, который выводит только четные цифры.
let space = '';

let a = 4;
const b = 2;
console.log('a % b =', a % b) // остаток равен нулю, так как делится ровно и без остатка.
a = 5;
console.log('a % b =', a % b) // остаток  равен 1, так как делится не ровно и есть остаток.
console.log(space);
// решение 1! больше кода и итераций 

for(let i = 2; i <= 10; i += 1) {
    if(i % 2 === 0) {
        console.log(i);
    }
} 

console.log(space);
// решение с выводом нечетных чисел.
// for(let i = 2; i <= 10; i += 1) {
//     if(i % 2 === 1) {
//         console.log(i);
//     }
// }


// решение 2! через Continue

for(let i = 2; i <= 10; i += 1) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
} 

console.log(space);
// Решение 3! меньше кода и интераций

for(let i = 2; i <= 10; i += 2) {
        console.log(i);
} 

