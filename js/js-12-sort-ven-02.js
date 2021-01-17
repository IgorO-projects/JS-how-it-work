const itemsUpperCase = ['Apple', 'LG', 'Samsung', 'Dell', 'Benq', 'Asus'];
const itemsLowerCase = ['Apple', 'lG', 'Samsung', 'dell', 'Benq', 'asus'];

const alphabeticSort = itemsUpperCase.slice().sort();

const descCompare = function (prev, next) {
    if(prev < next) return 1;
    return -1;
}

const unAlphabeticSort = itemsUpperCase.slice().sort(descCompare);
// const unAlphabeticSort = items.slice().sort().reverse();

console.log(itemsUpperCase);
console.log(alphabeticSort);
console.log(unAlphabeticSort);

function ascCompareToLower(prev, next) {
    return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
}
function DescCompareToLower(prev, next) {
    return prev.toLowerCase() < next.toLowerCase() ? 1 : -1;
}

const alphabeticLowerSortViaAsc = itemsLowerCase.slice().sort(ascCompareToLower);
const alphabeticLowerSortViaDesc = itemsLowerCase.slice().sort(DescCompareToLower);

console.log(itemsLowerCase);
console.log(alphabeticLowerSortViaAsc);
console.log(alphabeticLowerSortViaDesc);