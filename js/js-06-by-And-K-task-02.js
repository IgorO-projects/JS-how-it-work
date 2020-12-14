// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
const workers = [
    {name:'Alex', salary: 100, isActive: true },
    {name:'Rita', salary: 180, isActive: false },
    {name:'John', salary: 100, isActive: true },
    {name:'Derek', salary: 200, isActive: false }
]

const deleteWorker = (arr) => {
    
    let deletedWorkers = [];
    let workers = [];


    for(let i = 0; i < arr.length; i += 1) {
        if(!(arr[i].isActive) && arr[i].salary > 100) {
            // deletedWorkers.push(arr.splice(i, 1));
            deletedWorkers = [...deletedWorkers, ...arr.splice(i, 1)];
        }
    }

    return deletedWorkers;
};

console.table(workers);
console.log('Удаляем работников');
console.table(deleteWorker(workers));
console.log('Те кто выжил');
console.table(workers);