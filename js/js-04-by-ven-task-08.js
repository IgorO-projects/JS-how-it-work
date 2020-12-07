// Написать функцию pow(x, n), которая возводит в степень x в n.

const power = (x, n) => {
    let result = 1;

    for(let i = 1; i <= n; i += 1) {
        result *= x;
    }
    
    return result;
};

console.log(power(5, 2));
