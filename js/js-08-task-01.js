'use strict';
const spc = '***';

const prdct = {
    price: 5000, 
    showPrice() {
        console.log(this.price);
    },
};
prdct.showPrice();

console.log(spc);
/*******************************************************************/ 
const a = {};
const b = { key: 'b', };
const c = { key: 'c', };

a[b] = 1;
a[c] = 2;
console.log(a[b]);
