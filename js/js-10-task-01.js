const remainder = 11 % 3;
console.log(remainder);
const spc = ' ';
console.log(spc);
/************************/

class User {
    constructor({ name: username, age, numberOfPost }) {
        this._name = username;
        this.age = age;
        this.numberOfPost = numberOfPost;
    }

    // constructor(params) {         /* <- ANALOG */
    //     const { name: username, age, numberOfPost } = params;
    //     this._name = username;
    //     this.age = age;
    //     this.numberOfPost = numberOfPost;
    // }

    // getInfo () {
    //     console.log(`User ${this._name} is ${this.age} years old & has ${this.numberOfPost} posts`);
    // }
    get info () {
        const info = `User ${this._name} is ${this.age} years old & has ${this.numberOfPost} posts`;
        return info;
    }
}


const mango = new User({
    name: 'Mango',
    age: 24, 
    numberOfPost: 20,
});

console.log(mango.info);