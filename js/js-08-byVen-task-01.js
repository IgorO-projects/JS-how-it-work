// sum(a)(b) = a + b;

// const sumArgument = (a) => {
//     return function (b) {
//         return a + b; 
//     }
// }

/*********************************************/ 

const sumArgument = a => {
    const sumInside = b => {
        return a + b;
    };
    return sumInside;
}

console.log(sumArgument(2)(3));