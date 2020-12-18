const calculateAverage = (...args) => {

    let sum = 0;
    let total = 0;

    for(let i = 0; i < args.length; i += 1) {
        
        sum += args[i];
    }

    const average = sum / args.length
    return average;
}

console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));