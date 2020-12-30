/*************************WORKER*******************************/ 
const Worker = function({name, surname, rate, days}) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    Worker.count += 1; 
}

Worker.count = 0;

Worker.prototype.getSalary = function() {
    const salary = this.rate * this.days;
    return `заплата: ${salary}`;
};
Worker.prototype.getFullName = function(){
    return `${this.name} ${this.surname}`;
}

const newWorker = new Worker({
    name: 'Ivan', 
    surname: 'Ivanov', 
    rate: 10, 
    days: 30
});

/****************************BOSS*****************************/
const Boss = function({ name, surname, rate, days, workers }) {
    Worker.call(this, { name, surname, rate, days });
    this.workers = workers;
}

Boss.prototype = Object.create(Worker.prototype);
Boss.prototype.constructor = Boss;

Boss.prototype.getSalary = function() {
    const salary = this.rate * this.days * this.workers;
    return `заплата: ${salary}`;
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

