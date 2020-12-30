const User = function ({ name, surname }) {
this.name = name;
this.surname = surname;
}

User.prototype.getFullName = function() {
    return `This student ${this.name} ${this.surname}`;
}

const Student = function({ name, surname, year }) {
    User.call(this, { name, surname, year});
    this.year = year; 
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourse = function() {
    const now = new Date();
    const nowYear = now.getFullYear();
    return nowYear - this.year;
}

const newStudent = new Student({ name: 'Ivan', surname: 'Ivanov', year: 2015});

console.log(newStudent.name);
console.log(newStudent.surname);
console.log(newStudent.getFullName());
console.log(newStudent.year);
console.log(newStudent.getCourse());