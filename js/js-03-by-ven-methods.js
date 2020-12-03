const space = ''; // Пробел для консоли джаст удобоство :)
// 1) создайте массив с элементами "Джаз", "Блюз".  // ""

const styles = ['Джаз','Блюз'];
console.log(styles);

console.log(space);
// 2) Добавте "Рок-Н-Ролл" в конец.

styles.push('Рок-Н-Ролл');
console.log(styles);

console.log(space);
// 3) Замените значение в середине массива на "Классику"
// Код для замены значения должен в середине долен работать для массива любой длины.

const midElemIndex = Math.ceil((styles.length / 2) - 1);
console.log('midElemIndex =', midElemIndex);

// styles[midElemIndex] = 'Классику';
styles.splice(midElemIndex, 1, 'Классику');
console.log(styles);

console.log(space);
// 4) удалите первый элемент из массива.

const deletedItem = styles.shift();
console.log(deletedItem);

console.log(styles);

console.log(space);
// 5) добавьте в начало массива элементы "Рэп" и "Регги".

styles.unshift('Рэп', 'Регги');
console.log(styles);

