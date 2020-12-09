// Написать функцию к объекту, которая будет умножать все числовые свойства на 2.

const menu = {
    width: 300,
    height: 200,
    title: 'My name is..',
};

console.table(menu);

const multiplyNumeric = (obj) => {
    const keys = Object.keys(obj);
    
    for(const key of keys) {

        if(typeof obj[key] !== 'number') { // Number.isNaN(obj[key]) - не подходить,  
            continue;                      // возвращает NaN
        }

        obj[key] = obj[key] * 2;
    }
}

multiplyNumeric(menu);
console.table(menu);