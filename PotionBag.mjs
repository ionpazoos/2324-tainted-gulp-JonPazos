class PotionBag {
  constructor(potions = []) {
    this.potions = potions; 
  }
  static create(ingredients, cauldron) {
    const potions = [];
    for (let i = 0; i < ingredients.length; i++) {
      for (let j = i + 1; j < ingredients.length; j++) {
        const ingredient1 = ingredients[i];
        const ingredient2 = ingredients[j];
        const potion = cauldron.createPotion(ingredient1, ingredient2);
        if (potion) {
          potions.push(potion);
        }
      }
    }
    return new PotionBag(potions);
  }
}

export { PotionBag };
