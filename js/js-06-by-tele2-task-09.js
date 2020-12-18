'use strict';

function getExtremeElements(array) {
    // Пиши код ниже этой строки
const newArray = [];    
newArray.push(array[0], array[array.length - 1]);
// newArray.push(array[array.length - 1]);
return newArray;
}
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
// return [array[0], array[array.length - 1]] 
//     // Пиши код выше этой строки
//   }

console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));