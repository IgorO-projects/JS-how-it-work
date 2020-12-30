const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
        for(const pot of this.potions) {
            if (pot.name === potionName.name) {
                return `Зелье ${potionName.name} уже есть в инвентаре!`;
            }
            return this.potions.push(potionName);
        }
    },
    removePotion(potionName) {
        for(const pot of this.potions) {
            if(pot.name === potionName) {
                const potIndex = this.potions.indexOf(pot);
                return this.potions.splice(potIndex, 1);
            }
        } 
        console.log(`Зелья ${potionName} нет в инвентаре!`);
    },
    updatePotionName(oldName, newName) {
        for(const pot of this.potions) {
            if(pot.name === oldName) {
                return pot.name = newName;
            }
        }
        return `Зелья ${oldName} нет в инвентаре!`;
    },
    // Пиши код выше этой строки
  };
  

  console.log(atTheOldToad.getPotions());
  atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
  atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
  atTheOldToad.removePotion('Каменная кожа');
  atTheOldToad.removePotion('Зелье скорости');
  atTheOldToad.removePotion('ку-ку Епта');
  console.log(atTheOldToad.getPotions());
//   atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
//   console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
