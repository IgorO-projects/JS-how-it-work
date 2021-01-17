const spc = '_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_';
const numbers = [5,10,15,20,25];

// const total = numbers.reduce(function(acc, number, index, arr) {
//     console.log('acc:', acc);
//     console.log('number:', number);
//     console.log('index:', index);
//     console.log('arr:', arr);

//     acc += number;
//     return acc;
// }, 0);
const total = numbers.reduce((acc, number) => acc += number, 0);
console.log('total numbers', total);
console.log(spc);

const salaryEmployees = {
    mango: 150,
    ajax: 100,
    poly: 250,
}
const values =Object.values(salaryEmployees);
const totalSalary = values.reduce((acc, value) => {
return acc + value;
}, 0);
console.log('total salary:', totalSalary);
console.log(spc);

const playersGroup = [
    {id: 'player-01', name: 'Mango', timeplayed: 150, online: true},
    {id: 'player-02', name: 'Poly', timeplayed: 390, online: false},
    {id: 'player-03', name: 'Ajax', timeplayed: 110, online: false},
    {id: 'player-04', name: 'Kiwi', timeplayed: 260, online: false},
    {id: 'player-05', name: 'Chelsy', timeplayed: 90, online: true},
];

const totalTimePlayed = playersGroup.reduce((acc, player) => {
    return acc + player.timeplayed;
}, 0);
console.log('total Timeplayed:', totalTimePlayed);
console.log(spc);

 const cartStuff = [
    {label: 'banana', price: 340, quantity: 4},
    {label: 'Grapes', price: 890, quantity: 5},
    {label: 'Coconut', price: 450, quantity: 3},
    {label: 'Ananas', price: 670, quantity: 1},
 ];

 const totalAmountCart = cartStuff.reduce((acc, item) => {
    acc = item.price * item.quantity;
    return acc;
 }, 0);
console.log('Cart`s total amount:',totalAmountCart);
console.log(spc);

const tweets = [
    {id: '001', likes: 5, tags: ['js', 'nodejs'] },
    {id: '002', likes: 2, tags: ['html', 'css'] },
    {id: '003', likes: 17, tags: ['html', 'js', 'nodejs'] },
    {id: '004', likes: 8, tags: ['js', 'react'] },
    {id: '005', likes: 1, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets
.reduce((acc, tweet)=> {
    acc.push(...tweet.tags);
return acc;
}, []);
// const allTags = tweets
// .reduce((acc, tweet)=> {
//     acc.push(...tweet.tags);
// return acc;
// }, [])
// .filter((tweet, index, arr) => arr.indexOf(tweet) === index)
// .sort();
console.log(allTags);
console.log(spc);

// tagsStats = allTags.reduce((acc, tag) => {
//     console.log(tag);
    
//     if(acc.hasOwnProperty(tag)) {
//         console.log('found this tag! Adding to quantity.');
//         acc[tag] += 1;

//         return acc;
//     }
//     acc[tag] = 1;

//     return acc;
// }, {});
// console.log(tagsStats);
// tagsStats = allTags.reduce((acc, tag) => {
//     acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;

//     return acc;
// }, {});
// console.log(tagsStats);

tagsStats = allTags.reduce((acc, tag) => {
    return {
        ...acc, 
        [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
    }
}, {});
console.log(tagsStats);
console.log(spc);

/* REDUCE - своими руками */

Array.prototype.reduce = function(callback, initialValue = this[0]) {
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i += 1) {
        accumulator = callback(accumulator, this[i], index, this);
    }

    return accumulator;
};