// напишите функцию, которая считает сумму цифр в числе и возвращает ее.

const calcDigitsSum = function(numbers) {

    let sum = 0;

    const arr = String(numbers).split('');

    for(let arg of arr) {
        sum += Number(arg);
    }
    return sum;
};

console.log(calcDigitsSum(123));