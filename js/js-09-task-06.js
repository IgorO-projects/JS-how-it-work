function Hamster() {
    this.food = [];
};

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

const speedy = new Hamster();
const lazy = new Hamster();

speedy.found('орех');
speedy.found('яблоко');

console.log(speedy.food);
console.log(lazy.food);