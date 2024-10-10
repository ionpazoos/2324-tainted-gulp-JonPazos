import { Potion } from './potion.mjs';

class Cauldron {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    createPotion(ingredient_name1, ingredient_name2) {      
        const ingredient1 = this.ingredients.find(ingredient_name1);
        const ingredient2 = this.ingredients.find(ingredient_name2);
        if (!ingredient1 || !ingredient2) {
            throw new Error('Uno o ambos ingredientes no fueron encontrados.');
        }
        const common_effects = ingredient1.effects.filter(effect1 =>
            ingredient2.effects.some(effect2 => effect1.name === effect2.name)
        );
        if (common_effects.length === 0) {
            return Potion.failed();
        }
        if (isPotionOfSanity(ingredient1, ingredient2)) {
            return Potion.sanity();
        }
        return Potion.with(
            common_effects[0],
            ingredient1.weight + ingredient2.weight,
            ingredient1.value + ingredient2.value
        );
    }
}
function isPotionOfSanity(ingredient1, ingredient2) {
    return (ingredient1.name === "Nightshade" && ingredient2.name === "Ectoplasm") ||
           (ingredient2.name === "Nightshade" && ingredient1.name === "Ectoplasm") ? true : false;
}
export { Cauldron };
