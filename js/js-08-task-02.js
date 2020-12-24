'use strict';
const spc = '***';

const prdct = {
    price: 5000, 
    showPrice() {
        console.log(this.price);
    },
};

const prdct2 = {
    price: 10000, 
    showPrice() {
        console.log(this.price);
    },
};

function callAction(action) {
    // action.bind(prdct)(); // не хороший вариант, так как присваивает только один и конкретный контекст.
    action(); // рабочий и хороший вариант 
}

// callAction(prdct.showPrice); // не подхидит, ибо связано с выше упомянутым коментарием.
callAction(prdct.showPrice.bind(prdct)); // рабочий и хороший вариант 
callAction(prdct2.showPrice.bind(prdct2)); // рабочий и хороший вариант 

console.log(spc);

function callActionViaCall(action, context) {
    
    action.call(context); 
}

callActionViaCall(prdct.showPrice, prdct);
callActionViaCall(prdct.showPrice, prdct2); // можно использовать метод из другое объекта.