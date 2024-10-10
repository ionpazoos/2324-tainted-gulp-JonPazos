class Character {
    constructor(fullName, health, magick, stamina, potions = []) {
      this.fullName = fullName;  
      this.health = health;      
      this.magick = magick;      
      this.stamina = stamina;    
      this.potions = potions;    
    }
  
    static from(playerData, potions) {
      const fullName = `${playerData.name} the ${playerData.class}`;
      return new Character(fullName, playerData.health, playerData.magick, playerData.stamina, potions);
    }

    drinkEmAll() {
      for (let potion of this.potions) {
        const potionName = potion.name;
        const potionValue = potion.value;
  
        if (potionName.includes("Health")) {
          if (potionName.includes("Poison")) {
            this.health -= potionValue;
            console.log(`${this.fullName} drinks ${potionName} and loses ${potionValue} points of health.`);
          } else {
            this.health += potionValue;
            console.log(`${this.fullName} drinks ${potionName} and gains ${potionValue} points of health.`);
          }
        } else if (potionName.includes("Magicka")) {
          if (potionName.includes("Poison")) {
            this.magick -= potionValue;
            console.log(`${this.fullName} drinks ${potionName} and loses ${potionValue} points of magick.`);
          } else {
            this.magick += potionValue;
            console.log(`${this.fullName} drinks ${potionName} and gains ${potionValue} points of magick.`);
          }
        } else if (potionName.includes("Stamina")) {
          if (potionName.includes("Poison")) {
            this.stamina -= potionValue;
            console.log(`${this.fullName} drinks ${potionName} and loses ${potionValue} points of stamina.`);
          } else {
            this.stamina += potionValue;
            console.log(`${this.fullName} drinks ${potionName} and gains ${potionValue} points of stamina.`);
          }
        } else if (potionName === "Potion of Sanity") {
          this.health += potionValue;
          this.magick += potionValue;
          this.stamina += potionValue;
          console.log(`${this.fullName} drinks the Potion of Sanity and gains ${potionValue} points in all attributes.`);
        } else if (potionName === "Failed potion") {
          console.log(`${this.fullName} tries to drink a Failed potion, but nothing happens.`);
        } else {
          this.health += 1;
          this.magick += 1;
          this.stamina += 1;
          console.log(`${this.fullName} drinks ${potionName} and gains 1 point in all attributes.`);
        }
        if (this.health <= 0) {
          console.log(`${this.fullName} has died.`);
          break;
        }
        if (this.magick <= 0) {
          console.log(`${this.fullName} has lost all magicka and is defeated.`);
          break;
        }
        if (this.stamina <= 0) {
          console.log(`${this.fullName} is completely exhausted.`);
          break;
        }
  
        console.log(`Health: ${this.health}`);
        console.log(`Magick: ${this.magick}`);
        console.log(`Stamina: ${this.stamina}`);
        console.log('------------------------------');
      }
      if (this.health > 0 && this.magick > 0 && this.stamina > 0) {
        console.log("All potions have been consumed. The game is over.");
      }
    }
  }
  
  export { Character };
  