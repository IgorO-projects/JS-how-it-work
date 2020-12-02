// написать цикл через while или do while, который запрашивает user ввести больше 100 через promy
// если user ввел менее 100, запросить еще раз, пока не введет верное значение либо не нажмет отмена.


let input; 
const ordered = 100;
let message;

// while (true) {

//     input = prompt('введите число больше 100!');

//     if (Number(input) > ordered) {
//         message = 'окей, спасибо!';
//         break;
//     } else if (input === null) {
//         message = 'Произошла отмена';
//         break;
//     } else {
//         message = 'введите еще раз!';
//         console.log(message);
//     }
// }
// console.log(message);

do {
    input = prompt('введите число больше 100!');

    if (input === null) {
        message = 'Произошла отмена';
        break; 
    }
    if (Number(input) < ordered) {
        message = 'введите еще раз!';
        console.log(message);
    }
    message = 'окей, спасибо!';

} while (Number(input) <= ordered)
console.log(message);
