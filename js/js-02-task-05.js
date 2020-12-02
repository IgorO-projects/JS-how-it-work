let login;
let password;

while (true) {
    login = prompt('введите логин');
    login = login.toLowerCase();

    if (login === null) {
        console.log('отменено');
        break;
    }

    if (login === 'админ') {
        password = prompt('введите пароль');

        if (password === null) {
            console.log('отменено');
            break;
        }
        if (password === 'я главный') {
            console.log('Добро пожаловать');
            break;           
        } 
        else {
            console.log('пароль неверный! введите еще раз.');
        }
    }
    else {
        console.log('логин не правильный, попробуй еще раз!');
    }

}