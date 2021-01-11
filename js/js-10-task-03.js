class User {
    constructor ({ name, surname }) {
        this.name = name;
        this.surname = surname;
    }

    getFullName () {
        return `This student ${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor ({ name, surname, year }) {
        super({ name, surname });
        this.year = year;
    }

    getCourse () {
        const now = new Date();
        const nowYear = now.getFullYear();
        return nowYear - this.year;
    }
}
    
    
    const newStudent = new Student({ name: 'Ivan', surname: 'Ivanov', year: 2015});
    
    console.log(newStudent.name);
    console.log(newStudent.surname);
    console.log(newStudent.getFullName());
    console.log(newStudent.year);
    console.log(newStudent.getCourse());