function countProps(object) {
    // Пиши код ниже этой строки
    let propCount = Object.keys(object).length;

    // const keys = Object.keys(object);

    // for (const key of keys) {
    //   if (object.hasOwnProperty(key)) {
    //     propCount += 1;
    //   }
    // }
  
    return propCount;
    // Пиши код выше этой строки
  }
  console.log(countProps({}));
  console.log(countProps({ name: 'Mango', age: 2 }));
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

