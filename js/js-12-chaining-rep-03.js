const spc = '_-_-_-_-_-_-_-_-_-_-_-_-_-_-_';
const numbers = [4,1,2,5,3];

//используються промежуточные переменные 
const greaterThenTwo = numbers.filter(num => num > 2);

const multByTwo = greaterThenTwo.map(num => num * 2);

const sorted = [...multByTwo].sort((a, b) => a - b);

console.log(numbers);
console.log(greaterThenTwo);
console.log(multByTwo);
console.log(sorted);
console.log(spc);

// используется метод ципочки
const sortedViaChain = numbers
.filter(num => num > 2)
.map(num => num * 2)
.slice()
.sort((a, b) => a - b);

console.log(sortedViaChain);
console.log(spc);

const players = [
    {id: 'id-1', name: 'Coco', online: true, rank: 800},
    {id: 'id-2', name: 'Anan', online: false, rank: 200},
    {id: 'id-3', name: 'Jojo', online: true, rank: 300},
    {id: 'id-4', name: 'Fill', online: false, rank: 600},
    {id: 'id-5', name: 'Puss', online: false, rank: 100},
    {id: 'id-6', name: 'Eate', online: true, rank: 900},
    {id: 'id-7', name: 'Keny', online: true, rank: 500},
];

const rankForOnline = players
.filter(player => player.online)
.sort((prev, next)=> prev.rank - next.rank);

console.table(rankForOnline);
