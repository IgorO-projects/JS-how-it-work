// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

const Calculator = function () {
    
    this.a;
    this.b; 

    this.read = function () {
        this.a = prompt('please enter amount');
        this.b = prompt('please enter amount');
    }

    this.sum = function () {
        let sum = 0;
        sum = Number(this.a) + Number(this.b);
        return sum;
    }
    this.mult = function () {
        let sum = 0;
        sum = Number(this.a) * Number(this.b);
        return sum;
    }

};
//создали метод foo, который возводит степень, на самом объекте Number.
Number.prototype.foo = function (n) {
    let final = 1; 
    for (let i = 1; i <= n; i++) {
        final *= this;
    }
    return final;
};

Calculator.prototype.pow = function (n) {
    let powFinal;
    powFinal = Number(this.a).foo(n);
    return powFinal;
};
//условие для работы если а - число, которое возводим в степень, b - сама степень.
// Calculator.prototype.pow = function () {
// return Number(this.a) ** Number(this.b); 
// // let sum = 1;
// // for (let i = 1; i <= n; i++) {
// //     sum *= this.a;
// // }
// // return sum;
// }

// Calculator.prototype.pow = function (n) {
//     return Number(this.a).foo(n);
// }

// String.prototype.toUpper = function () {
//     return this.toUpperCase();
// }

// console.log('abrabra'.toUpper());

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mult=" + calculator.mult() );
alert( "Pow=" + calculator.pow(3));






