/*************************WORKER*******************************/ 
class Worker {
    constructor ({ name, surname, rate, days }) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        Worker.count += 1; 
    }
    getSalary () {
        const salary = this.rate * this.days;
        return `заплата: ${salary}`;
    };

    getFullName (){
        return `${this.name} ${this.surname}`;
    };
}

const newWorker = new Worker({
    name: 'Ivan', 
    surname: 'Ivanov', 
    rate: 10, 
    days: 30
});

/****************************BOSS*****************************/
class Boss extends Worker {
    constructor({ name, surname, rate, days, workers }) {
        super({ name, surname, rate, days });
        this.workers = workers;
    }

    getSalary () {
        const salary = this.rate * this.days * this.workers;
        return `заплата: ${salary}`;
    }
}

const boss = new Boss({
    name: 'Igor',
    surname: 'Igorov', 
    rate: 10, 
    days: 26, 
    workers: 10
 })

// logs for workers 
console.log(newWorker.name);
console.log(newWorker.surname);
console.log(newWorker.rate);
console.log(newWorker.days);
console.log(Worker.count);
console.log(newWorker.getSalary());
console.log(newWorker.getFullName());

// logs for Boss
console.log(boss.name);
console.log(boss.surname);
console.log(boss.rate);
console.log(boss.days);
console.log(boss.getSalary());
console.log(boss.getFullName());
console.log(Worker.count);

