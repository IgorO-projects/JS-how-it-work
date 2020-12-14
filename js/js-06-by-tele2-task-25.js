function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
  let array3 = [];
    for(let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            array3.push(array1[i]);
        }
    }
    return array3;
    // Пиши код выше этой строки
  }
  console.log(getCommonElements([1, 2, 3], [2, 4]));
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
  console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//   if(array1.includes(array2[i]) === array2.includes(array1[i])) {
//     array3.push(array1[i]); 
//   }
