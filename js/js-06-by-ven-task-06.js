const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

const getObjectWithoutProperty = (obj, key) => {
    
    const newObj = {...obj};

    delete newObj[key];

    return newObj;
};

console.log(getObjectWithoutProperty(user, 'name'));
console.log(getObjectWithoutProperty(user, 'age'));
console.log(getObjectWithoutProperty(user, 'hobby'));

// Пример 6 - напишите функцию getObjectWithoutPropperty
// которая принимает объект, название свойства
// и возвращает копию объекта без этого свойства

// 'use strict'; // использовать !

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   // const getObjectWithoutPropperty = (obj, key) => {
// //   const newObj = { ...obj };

// //   delete newObj[key];

// //   return newObj;
// // };

// // const getObjectWithoutPropperty = (obj, key) => {
// //   const { [key]: _, ...rest } = obj;
// //   return rest;
// // };

// const getObjectWithoutPropperty = (key, { [key]: _, ...rest }) => rest;

// console.log(getObjectWithoutPropperty('age', user));

