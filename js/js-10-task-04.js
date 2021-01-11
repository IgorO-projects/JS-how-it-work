class Storage {
    constructor(arr){
        this._arr = arr;
    }

    getItems() {
        return this._arr;
    }
    addItem(item) {
        if(this._arr.includes(item)) {
            console.log(`Calm down bro, this item is already in storage!`);
        } else {
            this._arr.push(item);
        }
    }
    removeItem(removedItem) {
        // const position = this._arr.indexOf(removedItem);
        //     if(position === -1) {
        //         console.log(`Storage doesn't have this item ${removedItem}`);
        //     } else {
        //         this._arr.splice(position, 1);
        //     }
        const newItems = [];

        for (const item of this._arr) {
            if (item === removedItem) continue;

            newItems.push(item);
        }
        this._arr = newItems;
    }
};

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

let items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
storage.addItem('Дроид');
storage.addItem('Пролонгер');
console.table(items);

console.log('ссылка на оригинальный массив "storage"', items === storage.getItems());
storage.removeItem('Пролонгер');
console.log('а здесь ссылка еще на тот же маассив, но "storage.getItems()" имеет ссылку на новый массив',
 items === storage.getItems());
// Необходимо перезаписать переменную "items", по прочине, что в ней теперь ссылка на первый массив
// то есть на сам "storage"
items = storage.getItems();
console.log('ссылка перезаписанная', items === storage.getItems());

console.table(items);

// console.table(storage.getItems());