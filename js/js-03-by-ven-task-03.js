// Напишете с помощью методов "split" и "join" функцию "capitalize"(word)
// которая принимает слово и возвращает новое слово, с 1м символом верхнем регистре

const lowerWord = 'abrakadabra';

// Здесь функция создалась и ожидает вызова, пока она не вызвона, она не выполняется.
// Слово "word", которое находится в "(..)" является праметром или "шаблоном" 
// и при вызове функции на место параметров записывается аргумент , то есть значение,
//  которое должно пройти через функцию. 
const capitalize = function(word) {
    
   const letters = word.split('');

    letters[0] = letters[0].toLocaleUpperCase();

    return letters.join('');
};

console.log(lowerWord);
console.log(capitalize(lowerWord));

