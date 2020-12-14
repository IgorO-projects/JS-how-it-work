function calculateTotal(number) {
    // Пиши код ниже этой строки
  let sum = 0;
  
    for(let i = 0; i <= number; i += 1) {
      sum += i;
    }
    return sum;
    // Пиши код выше этой строки
  } 
  console.log(calculateTotal(1)); // 1
  console.log(calculateTotal(3)); // 6
  console.log(calculateTotal(7)); // 28
  console.log(calculateTotal(18)); // 171
  console.log(calculateTotal(24)); // 300
  console.log(calculateTotal()); // 0