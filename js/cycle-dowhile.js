// let name = '';

// do {
//     name = prompt('Введите имя длиннее 3х символов', '');
// } while (name.length < 3);

// console.log('Ввели имя: ', name);

// ******************************************************************************************************************

// let order;

// do {
//     order = prompt('Execute order 66');
//     console.log(typeof order);
//     order = Number(order);

//     if (order === 66) {
//         alert('Yes, my Lord!');
//         break;
//     } else if (order !== null) {
//         alert('TRAITOR');
//     } else {
//         alert('DO IT!');
//     }

// } while (order !== 66) 

// ******************************************************************************************************************

// HM-01-JS

// let total = 0;

// do {
//     let input = prompt('видете число');
//     console.log('тип значения из input:', typeof input);
//     console.log('является не числом значение из input:', isNaN(Number(input)));

//     if(input === null) {
//         break;
//     }

//     input = Number(input);

//     const notANumber = Number.isNaN(input);

//     if(notANumber) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }

//     total += input;
//     console.log(total);

// } while (true)
// total = alert(`Общая сумма чисел равна ${total}`);

// ******************************************************************************************************************