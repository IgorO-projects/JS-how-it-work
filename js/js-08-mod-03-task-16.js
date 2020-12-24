function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const arr = Object.values(salaries);
    
    for(let i = 0; i < arr.length; i++) {
        totalSalary += arr[i];
    }
    // Пиши код выше этой строки
    return totalSalary;
  }

  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330)