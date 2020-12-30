// const filter = function(array, test) {
//     const filteredArr = [];
//     for(const elm of array) {
//         const passed = test(elm);
//         if(passed) {
//             filteredArr.push(elm);
//         }
//     }

//     return filteredArr;
// }

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true }
// ];

// console.log(filter(fruits, fruit => fruit.isFresh));

/*****************************************************/ 

// const makeChef = function (name) {

//     return function (dish) {
//         console.log(`Chef ${name} is cooking today a ${dish}`);
//     }
// }

// // makeChef('Johny')('Apple Pie');
// const chefWork = makeChef('Johny');
// chefWork('Pizza');


