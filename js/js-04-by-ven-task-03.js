// задача - псевдомассив arguments. Напишите функцию calculateAvarage(), 
// которая принимает произвольное количество аргументов и возвращает их
// среденее значение. Все аргументы будут числа

const calculateAvarage = function() {

    let total = 0;
    // for(let i = 0; i < arguments.length; i += 1) {

    //     total += arguments[i]; // ЗДЕСЬ НУЖНО ПРОХОДИТ ПОИНДЕКСУ ЭЛЕМЕНТА В КОЛЛЕКЦИИ МАССИВА!

    // }

    // return total / arguments.length;

    for(const arg of arguments) {
        total += arg;
    }

    const avarage = total / arguments.length;

    return avarage;
};

console.log(calculateAvarage(1, 2, 3, 4));
console.log(calculateAvarage(14, 8, 2));
console.log(calculateAvarage(27, 43, 2, 8, 36));