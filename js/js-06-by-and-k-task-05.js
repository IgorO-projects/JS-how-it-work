// 1)Напишите ф-цию которая юудет создавать массив машин(оъектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.
let garage = [];
const carsToAdd = [
    {
        name: "Audi",
        model: "Q7"
    },
    {
        name: "Audi",
        model: "Q7"
    },
    {
        name: "Audi",
        model: "Q7"
    },
    {
        name: "Audi",
        model: "Q7"
    }
]
const car = () => {
    const cars = [];
    const addCar = car => {
        cars.push(car);
        if(cars.length === 5) {
            garage = [...garage, ...cars.splice(0)]          
        }
    }    
    const showCars = () => console.log('cars :>> ', cars);
    return {addCar, showCars};
}
const audi = car();
audi.addCar({
    name: "Audi",
    model: "Q7"
})
audi.addCar({
    name: "Audi",
    model: "Q7"
})
audi.addCar({
    name: "Audi",
    model: "Q7"
})
audi.addCar({
    name: "Audi",
    model: "Q7"
})
audi.addCar({
    name: "Audi",
    model: "Q7"
})
audi.showCars();
console.log('garage :>> ', garage);

// const carObj = {
//     cars: [],
//     addCar(car){
//         this.cars.push(car);
//         if(this.cars.length === 5) {
//             garage = [...garage, ...this.cars.splice(0)]          
//         }
//     },   
//     showCars(){console.log('cars :>> ', this.cars)},
// }
// carObj.addCar({
//     name: "Audi",
//     model: "Q7"
// })
// console.log('carObj.cars :>> ', carObj.showCars());