const cart = {
    items: [
        {name: 'apple', price: 50, quantity: 1},
        {name: 'lemon', price: 60, quantity: 1},
    ],

    getItems: function() {
        return this.items;
    },

    add(product) {

        for(item of this.items) {
             
            if(product.name === item.name) {
                console.log('есть такой продукт, увеличиваем кол-во')
                item.quantity += 1; 
                return;              
            }
        }

        console.log();
        product.quantity = 1;
        this.items.push(product);
    },

    remove(productName) {
        console.log(productName);

        for(let i = 0; i < this.items.length; i++) {
            
            const item = this.items[i];

            if(productName === item.name) {
                console.log(`Найден продукт "${productName}" для удаления с индексом "${i}"`);

                this.items.splice(i, 1);
            }

        }
    },

    clear() {
        // this.items.length = 0; - не лучший метод, есть под капотный последствия.
        this.items = []; // ДАННЫЙ СЛУЧАЙ ЛУЧШЕ! ПЕРЕЗАПИСЫВАЕТ НОВЫЙ МАССИВ, старый удаляется. 
    },

    countTotalPrice() {
        let total = 0;

        for(let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];
            total += item.price * item.quantity;
        }

        // for(const item of this.items) {
        //     total += item.price;
        // }
        return total;
    },

    increaseQuantity(productName) {
        for(const item of this.items){
            if(item.name === productName) {
                item.quantity += 1;
            }
        }
    },

    increaseQuantity(productName) {
        for(const item of this.items){
            if(item.name === productName) {
                item.quantity += 1;
            }
        }
    },

    decreaseQuantity(productName) {
        for(const item of this.items){
            if(item.name === productName) {
                if(item.quantity - 1 === 0) { // данная ветка нужна на случай, если клиент захочет 
                    this.remove(productName); // довести количесто продукта до 0. 
                    return;                   // Тогда код удаляет выбранный объект.
                }
                item.quantity -= 1;
            }
        }
    },



};

console.table(cart.getItems()); // здесь массив еще пустой!

cart.add({name: 'apple', price: 50});
cart.add({name: 'grapes', price: 70});
console.table(cart.getItems());

cart.remove('grapes');
console.table(cart.getItems());

// cart.clear(); // закоментирована попричине полного очищения массива.
// console.table(cart.getItems());

cart.increaseQuantity('apple');
console.log('Добавляет единицу кол-ва выбраного продукта');
console.table(cart.getItems());

cart.decreaseQuantity('apple');
console.log('Убирает единицу кол-ва выбраного продукта');
console.table(cart.getItems());

console.log('total: ', cart.countTotalPrice());

