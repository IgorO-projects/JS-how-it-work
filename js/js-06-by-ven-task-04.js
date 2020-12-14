const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  const userEntries = Object.entries(user);

  for(const entry of userEntries) {
      const [key, value] = entry;

      console.log(`${key}: ${value}`);
  }

// В задача объект разбит на миссив с подмассивами для каждого поля(строчка) объекта,
// после чего происходит Деструктуриция подмассива и в локальные переменные присваиваются свойства.
// в key - ключи, а в value - значения.