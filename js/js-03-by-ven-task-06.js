// Перебор массива. Напишем функцию "logItems" (array), 
// которая получает массив и использует цикл "for", 
// который для каждого элемента будет выводить в консоль
// сообщение в формате "номер элемента" и "значение элемента"
// Нумерация элементов должна начаться с 1.

const items = ['Mango','Poly','Ajax','Kiwi'];

const logItems = function (array) {

    for(i = 0; i < array.length; i += 1) {
        
        const message = `${i + 1} - ${array[i]}`;

        console.log(message);
    }
}
logItems(items);