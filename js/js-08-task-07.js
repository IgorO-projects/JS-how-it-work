function add(n) {
    let result = 0 ;

    function addToResult (num) {
        if (num === undefined) return result;
        result += num;

        return addToResult;
    }

    return addToResult(n);
}

console.log(add());
console.log(add(2)(5)(7)());