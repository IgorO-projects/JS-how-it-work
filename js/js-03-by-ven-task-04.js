// С помощью методов "split" и "join" написать функцию "snakeToCamelCase"(word), 
// которая принимает имя переменной и ее значение в формате "snake_case",
//  а возвращает в формате "camelCase"

 const variableName = 'this_is_some_variable_name';


//  function snakeToCamelCase need to use capitalize;
 const snakeToCamelCase = function(word) {

    const words = word.split('_');
    console.log(words);

    for(let i = 1; i < words.length; i += 1) {
        words[i] = capitalize(words[i]);
    }
    console.log(words);

    return words.join('');
 };

//  Функция может находится здесь,
//  она так как она находится до объявления функции "snakeToCamelCase".
 //  function capitalize only first latter; 
const capitalize = function(word) {
    
    const letters = word.split('');
 
     letters[0] = letters[0].toLocaleUpperCase();
 
     return letters.join('');
 };

 console.log(snakeToCamelCase(variableName));

 