const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    removePotion(potionName) {
        const potionNameIndex = this.potions.indexOf(potionName);
        this.potions.splice(potionNameIndex, 1);
    },
  };
console.table(atTheOldToad.potions);
atTheOldToad.removePotion('Дыхание дракона');
atTheOldToad.removePotion('Зелье скорости');
console.table(atTheOldToad.potions);