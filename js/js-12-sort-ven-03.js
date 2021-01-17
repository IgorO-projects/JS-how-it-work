const items = [
    { name: 'Apple', price: 12000 },
    { name: 'Samsung', price: 11000 },
    { name: 'Asus', price: 9000 },
    { name: 'Benq', price: 10000 },
    { name: 'Dell', price: 15000 },
];

const itemsByAscendingOrder = items.slice().sort((prev, next) => prev.price - next.price);
const itemsByDescendingOrder = items.slice().sort((prev, next) => next.price - prev.price);

console.log(itemsByAscendingOrder);
console.log(itemsByDescendingOrder);

const unAlphabetCompare = function(prev, next) {
    if(prev.name < next.name) return 1;
    return -1;
    // return prev.name < next.name ? 1 : -1;
}

const itemsByAlphabetOrder = items.slice().sort((prev, next) => prev.name > next.name ? 1 : -1);
const itemsByUnAlphabetOrder = items.slice().sort(unAlphabetCompare);

console.log(itemsByAlphabetOrder);
console.log(itemsByUnAlphabetOrder);