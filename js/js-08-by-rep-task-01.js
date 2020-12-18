'use strict';
//Не работает так вызов функции происходит без объекта.
// const makeChangeColor = function() {
//     const changeColor = function(color) {
//         this.color = color;
//     };

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.changeColor = changeColor;

//     return sweater.changeColor;
// }

// const changeColor = makeChangeColor();

// changeColor('blue');


// в данном случае будет работать, так как функция был вызвана в контексте объекта "hat". 

const makeChangeColor = function() {
    const changeColor = function(color) {
        console.log(this); // здесь "this" - имеет контекс "hat"
        this.color = color;
    };

    return changeColor;
};

const hat = {
    color: 'blue',
    changeColor: makeChangeColor(), // здесь присвоение ссылки вызова функции "makeChangeColor".  
};

hat.changeColor('red');

console.log(hat);