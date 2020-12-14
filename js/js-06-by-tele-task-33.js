  function formatMessage(message, maxLength) {
    let result;
  // Пиши код ниже этой строки
    result = message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
    // if(message.length <= maxLength) {
    //     result = message;
    // } else {
    //     result = message.slice(0, maxLength) + '...';
    // } 
    
  // Пиши код выше этой строки
    return result;
  }

console.log(formatMessage('Curabitur ligula sapien', 16)); // возвращает 'Curabitur ligula...'.
console.log(formatMessage('Curabitur ligula sapien', 23)); // возвращает 'Curabitur ligula sapien'.
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // возвращает 'Vestibulum facilisis...'.
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // возвращает 'Vestibulum facilisis purus nec'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // возвращает 'Nunc sed turpis...'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // возвращает 'Nunc sed turpis a felis in nunc fringilla'.