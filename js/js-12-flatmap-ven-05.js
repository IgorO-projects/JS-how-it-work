const spc = '_-_-_-_-_-_-_-_-_-_-_-_-_-_-_';
const arr = [1, 6, 7, 3, 8, 2, 9, 4];

//forEach
const squers = [];

arr.forEach(num => {
   squers.push(num ** 2);
});

console.log(squers);

let sum = 0;

arr.forEach(num => {
    sum += num;
})
console.log(sum);
console.log(spc);

//map
const mapedSquers = arr.map(num => num ** 2);
console.log(mapedSquers);
console.log({ mapedSquers });
console.log(spc);

//reduce
const reducedArr = arr.reduce((acc, item) => {
    return acc + item;
}, 0);
console.log(reducedArr);
console.log({ reducedArr });
console.log(spc);

//every,some
const copyArr = [...arr, -2, -1, -4, -7];
console.log(copyArr);

const isEveryGreaterZero = copyArr.every(num => num > 0);
const isSomeSmalerZero = copyArr.some(num => num < 0);
console.log({ isEveryGreaterZero });
console.log({ isSomeSmalerZero });
console.log(spc);

//method mix
mixCompare = function() {
    return Math.random() - 0.5;
}
const mixedArr = copyArr.sort(mixCompare);
console.log(mixedArr);
console.log(spc);

//filter
const filtredToNegatives = mixedArr.filter(num => num < 0);
console.log(filtredToNegatives);

const filtredToEven = mixedArr
.filter(num => num > 0)
.filter(num => num % 2 === 0);
console.log(filtredToEven);
console.log(spc);

const topics = ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub'];
const longitems = topics.filter(item => item.length > 5);
console.log(longitems);
console.log(spc);

const dataArr = [ 1, 2, [3, 4], 5, [6, 7] ];
const filteredData = dataArr.filter(item => Array.isArray(item));
console.log(filteredData);
console.log(spc);

const lengthNegatives = mixedArr.filter(item => item < 0).length;
console.log({ lengthNegatives });




