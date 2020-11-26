let name = '';

do {
    name = prompt('Введите имя длиннее 3х символов', '');
} while (name.length < 3);

console.log('Ввели имя: ', name);