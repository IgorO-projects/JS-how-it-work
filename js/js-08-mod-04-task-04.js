const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, makePizza, onOrderError) {
        if(!this.pizzas.includes(pizzaName)) {
            return onOrderError(pizzaName);
        }
        if(this.pizzas.includes(pizzaName)) {
            return makePizza(pizzaName) ;
        }
        
    },
  };
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(pizzaName) {
    return `В ассортименте нет пиццы с названием ${pizzaName}.`;
  }
  
  // Вызовы метода с колбэками
  console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
  console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
  console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
  console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
  