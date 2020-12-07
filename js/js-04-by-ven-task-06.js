// Задание 6! написать функции с использиванием (includes, indexOf, push),
// addCourse - добавляет курс 
// removeCourse - удаляет курс 
// uodateCourse - заменяет курс

const courses = ['HTML','CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = (name) => {

    if(courses.includes(name)) {
        return; 
    }

    courses.push(name);
};

const removeCourse = function(name) {
    
    const removeIndex = courses.indexOf(name);

    if(removeIndex === -1) {
        return;
    }
    
    courses.splice(removeIndex, 1);

};

const updateCourse = function(name, updated) {

    const replacedName = courses.indexOf(name);

    // if(replacedName === -1) {
    //     return;
    // }
    // courses.splice(replacedName, 1, updated);
    
    // if(courses.includes(name)) {
    //     courses.splice(replacedName, 1, updated);
    // }

};

addCourse('Express');
console.log(courses);
addCourse('CSS');
console.log(courses);
removeCourse('React');
console.log(courses);
removeCourse('Vue');
console.log(courses);
updateCourse('Express', 'NestJS');
console.log(courses);

