class User{
    constructor({ login, email }) {
        this._login = login;
        this._email = email;
    }

    get login() {
        return this._login;
    }

    set login(newLogin) {
        this._login = newLogin;
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        this._email = newEmail;
    }
};

const mango = new User({
    login: 'Mango',
    email: 'mango@mail.com',
});

console.log(mango.login);
mango.login = 'MangoDog';
console.log(mango.login);

const poly = new User({
    login: 'Poly',
    email: 'poly@mail.com',
});

console.log(poly.login);
poly.email = 'PolyParrot@arw.com';
console.log(poly.email);