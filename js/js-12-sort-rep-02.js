const spc = '_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_';
const numbers = [3,9,2,7,4,1,6];
const copyForAsc = numbers.slice();
const copyForDesc = numbers.slice();

const ascCompare = (prev, next) => {
    // if(prev > next) return 1;
    // if(prev < next) return -1;

    // return 0; 
    return prev - next; 
}
const descCompare = (prev, next) => next - prev;

const resultAsc = copyForAsc.sort(ascCompare);
const resultDesc = copyForDesc.sort(descCompare);
console.log(numbers);
console.log(resultAsc);
console.log(resultDesc);
console.log(spc);

const playersGroup = [
    {id: 'player-01', name: 'Mango', timeplayed: 150, online: true},
    {id: 'player-02', name: 'Poly', timeplayed: 390, online: false},
    {id: 'player-03', name: 'Ajax', timeplayed: 110, online: false},
    {id: 'player-04', name: 'Kiwi', timeplayed: 260, online: false},
    {id: 'player-05', name: 'Chelsy', timeplayed: 90, online: true},
];

const copyForAscPlayersGroup = [...playersGroup];

// порядок от самого редко-играющего, через переменую.
const sortedByAscPlayersGroup = copyForAscPlayersGroup.sort(function(prev, next) {
    return prev.timeplayed - next.timeplayed;
});

// порядок от лучше играющего, через чейнинг. 
const sortedByDescPlayersGroup = [...playersGroup].sort(function(prev, next) {
    return next.timeplayed - prev.timeplayed;
});

console.table(playersGroup);
console.table(sortedByAscPlayersGroup);
console.table(sortedByDescPlayersGroup);
console.log(spc);