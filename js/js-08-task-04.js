'use strict';
const spc = '***';

// function changeSalary(value) {
//     this.salary += value;
// }

// function changeUserSalary(user, value) {
//     user.salary += value;
// }

// const user1 = {
//     name: 'Emet',
//     salary: 1300,
// };

// const user2 = {
//     name: 'Gideon',
//     salary: 2600,
// };

// changeUserSalary(user1, 200);
// console.log(user1);
// changeUserSalary(user2, -300);
// console.log(user2);
// console.log(spc);

/**********************************************/

function changeSalary(value) {
    this.salary += value;
}

function changeSalaryViaBind(callback, value) {

     callback(value);
}

const user1 = {
    name: 'Emet',
    salary: 1300,
};

const user2 = {
    name: 'Gideon',
    salary: 2600,
};

changeSalaryViaBind(changeSalary.bind(user1), 300);
console.log(user1);
changeSalaryViaBind(changeSalary.bind(user2), -200);
console.log(user2);
console.log(spc);

/**********************************************/

function changeSalaryViaCall(user, value) {

    changeSalary.call(user, value);
}

changeSalaryViaCall(user1, 200);
console.log(user1);
changeSalaryViaCall(user2, 100);
console.log(user2);

