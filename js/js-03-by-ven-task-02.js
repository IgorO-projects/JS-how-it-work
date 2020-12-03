// создайте массив с элементами 1, 2 и 3 
// Увеличьте второй элемент на единицу.

// данный вариант не совсем корректный, ибо идет поиск по значению элемента. 
// А нам индекс нужен второго элемента.

const numbers  = [1,2,3];
console.log(numbers);

console.log(numbers.indexOf(2));

let numberToInsert = numbers.indexOf(2);

numbers[numberToInsert] += 1; // - данный вариант подойтет для стрингов и мат вычислений.
// numbers[numberToInsert]++; // - данный вариант только математических вычислений.

console.log(numbers);
