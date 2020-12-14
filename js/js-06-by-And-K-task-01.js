

// Напишите ф-цию, которая принимает аргументом массив обьектов и строку с названием камня. 
// Ф-ция считает сколько будет стоить то к-во камней, которой записано в объекте
const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

const getTotalPrice = (arr, name) => {

    let sum = 0;

    for(const stone of arr){

        if(stone.name === name) {
            sum = stone.price * stone.quantity;
        }
    }

    return sum;
};

console.log(getTotalPrice(stones, 'Изумруд'));
console.log(getTotalPrice(stones, 'Щебень'));
