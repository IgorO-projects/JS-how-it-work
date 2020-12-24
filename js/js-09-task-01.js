const Hotel = function (name, stars, capacity) {

    this.name = name;
    this.stars = stars;
    this.capacity = capacity;
  };
  
  // В результате вызова
  const hotel = new Hotel('Resort Hotel', 5, 100);
  // Получаем такой объект
  console.log(hotel);
  // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}