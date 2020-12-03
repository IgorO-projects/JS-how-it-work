// Напишем Функцию "findLargestNumber", которая ищет самое большое число в массиве.

const findLargestNumber = function (numbers) {

    let LargestNumber = numbers[0];

    // for(const number of numbers) {
    //     if (number > LargestNumber) {
    //         LargestNumber = number;
    //     }
    // }
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > LargestNumber) {
            LargestNumber = numbers[i];
        }
    }

    return LargestNumber;
}
console.log(findLargestNumber([1,9,30,105,42]));
console.log(findLargestNumber([1,92,26,70,2]));