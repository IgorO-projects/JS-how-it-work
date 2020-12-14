function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки
      let words = message.split(' ');
    return (words.length * pricePerWord);
  
    // Пиши код выше этой строки
  }

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));