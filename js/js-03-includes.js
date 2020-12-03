// Проверяем наличие работника на работе.
// сначала через "for", а потом через "includes". 

// 1) Итерации через перечисление по "i" 
// const staff = ['Mango','Poly','Ajax','Kiwi'];
// const query = 'Ajax';
// let result = '';

// for(let i = 0; i < staff.length; i += 1) {

//     if(query === staff[i]) {
//         result = `Сотрудник ${query} есть на работе`;   
//         break;
//     }
//     result = `Сотрудник ${query} не присутсвует на работе`;
// }
// console.log(result);

// 2)
// const staff = ['Mango','Poly','Ajax','Kiwi'];
// const query = 'Ajax';
// let result = `Сотрудник ${query} не присутсвует на работе`;

// for(const employee of staff) {
    
//     if(query === employee) {
//         result = `Сотрудник ${query} есть на работе`;   
//     }
// }
// console.log(result);

/************************************************************************************************/

const staff = ['Mango','Poly','Ajax','Kiwi'];
const query = 'Ajax';
let result = '';

result = staff.includes(query) 
? `Сотрудник ${query} есть на работе` 
: `Сотрудник ${query} не присутсвует на работе`;

console.log(result);