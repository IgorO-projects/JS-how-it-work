//  добавляем и удаляем элемент из массива при помощи метод "splice". 

// 1) удаление элемента из массива.
const cardsSetOne = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'];
console.log('before :', cardsSetOne);

const cardToRemowe = 'card-3';
console.log('cardToRemowe has index:', cardsSetOne.indexOf(cardToRemowe));
const indexOne = cardsSetOne.indexOf(cardToRemowe);

cardsSetOne.splice(indexOne, 1);
console.log('after remove:', cardsSetOne);

// 2) добавление в массив.
// Почему-то "indexTwo" - не получает значение индекса карточки-6, ВЫЯСНИТЬ где ошибка? 
// чтобы "indexTwo" принял значение индекса необходимо было указать индекс из какой колекции 
// запись в данном случае выглядела - "cardsSetTwo.indexOf(cardToMove);".

const cardsSetTwo = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'];

const cardToInsert = 'card-12';
const cardToMove = 'card-6';
console.log('cardToMove has index:', cardsSetTwo.indexOf(cardToMove));
const indexTwo = cardsSetTwo.indexOf(cardToMove);

cardsSetTwo.splice(indexTwo, 0, cardToInsert);

console.log('after insert:', cardsSetTwo); 