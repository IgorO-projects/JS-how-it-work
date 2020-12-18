'use strict';
const showTag = function(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
    console.log('this :', this);
    console.log('this.tag :', this.tag);
};

const mango = {
    tag: 'Mango',
};

const poly = {
    tag: 'Poly',
};

showTag.call(mango, 14, 'body', 1); // метод "call" добавляет в функцию контекст,
                                 //  его нужно указать после открывающейся скобки. 
                                 // Также через запьятые можно указать доп аргументы
showTag.apply(poly, [1, 2, 3]); // "apply" - делает точно также,
                                // только доп аргументы передаються ввиде массива.

