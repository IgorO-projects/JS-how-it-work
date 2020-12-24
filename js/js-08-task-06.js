const add3 = n => n + 3;
const mult5 = n => n * 5;
const pow2 = n => n ** 2;

function compose(...fns) {

    function composed(n) {

        let result = n;
        
        for(let i = 0; i < fns.length; i++) { 
            const currentFunction = fns[i];
           result = currentFunction(result);
        }
        return result; 
    }
    return composed;
}

const composedFunc1 = compose(add3, mult5, pow2);
console.log(composedFunc1(5));
const composedFunc2 = compose(mult5, pow2, add3);
console.log(composedFunc2(5));