function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    // Пиши код выше этой строки
    return result;
  }
  

console.log(checkForSpam('Latest technology news'));  //  возвращает false.
console.log(checkForSpam('JavaScript weekly newsletter'));  // возвращает false.
console.log(checkForSpam('Get best sale offers now!'));  //  возвращает true.
console.log(checkForSpam('Amazing SalE, only tonight!'));  //  возвращает true.
console.log(checkForSpam('Trust me, this is not a spam message'));  //  возвращает true.
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));  //  возвращает true.
console.log(checkForSpam('[SPAM] How to earn fast money?'));  //  возвращает true.