const arr = ['HTML', 'JavaScript', 'Algol', 'CSS', 'Python', 'Basic'];

const sortStringArray = (stringArray) => {
    
    const sortedArray = stringArray.slice();
    
    for(let i = sortedArray.length -1; i > 0; i--) {
         for(let j = 0; j < i; j += 1) {

             if(sortedArray[j] > sortedArray[j + 1]){

                // const temp = sortedArray[j];

                // sortedArray[j] = sortedArray[j + 1];
                // sortedArray[j + 1] = temp;
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
             }
         }
    }

    return sortedArray;
};

console.log(arr);
console.log(sortStringArray(arr));