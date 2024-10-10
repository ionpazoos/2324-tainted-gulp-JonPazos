import { getData, getPlayer } from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import { Cauldron } from './cauldron.mjs';
import { PotionBag } from "./PotionBag.mjs";
import { Character } from "./Character.mjs";


const execute = async () => {
    try {
        const data = await getData();
        const player = await getPlayer();
        const ingredients = Ingredients.load(data);
        const cauldron = new Cauldron(ingredients);
        //para probar con otras bolsas cambia el pouch por: puch_green,pouch_yellow,pouch_red 
        const bagIngredients = player.players[0].pouch_yellow;
        const potionBag = PotionBag.create(bagIngredients, cauldron);
        showPotions(potionBag.potions);
        const joseph = Character.from(player.players[0], potionBag.potions);
        showCharacter(joseph);
        joseph.drinkEmAll(ingredients);
    } catch (error) {
        console.log("Error:", error.message);
    }
};
function showPotions(potions) {
    potions.forEach((potion) => {
      console.log(`${potion.name}`);
      console.log(`Value: ${potion.value}`);
      console.log(`Weight: ${potion.weight}`);
      console.log(`Time: ${potion.time}`);
      console.log('------------------------------');
    });
  }

function showCharacter(character) {
    console.log(character);
    
    console.log(`${character.fullName}`);
    console.log('------------------------------');
    console.log(`Health: ${character.health}`);
    console.log(`Magick: ${character.magick}`);
    console.log(`Stamina: ${character.stamina}`);
    
    character.potions.forEach((potion, index) => {
      console.log(`Potion ${index + 1}: ${potion.name}`);
    });
  }
  
  export { showCharacter };
  

execute();
