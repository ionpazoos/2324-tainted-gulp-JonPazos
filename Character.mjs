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
        
        for (let Potion of this.potions) {
          const effects = Potion.effects; // Obtenemos los efectos de la poción
    
          // Verificamos los efectos uno por uno para aplicar el impacto correcto
          effects.forEach(effect => {
            if (effect.includes('Restore Health')) {
              this.health += Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and gains ${Potion.value} points of health.`);
            } else if (effect.includes('Damage Health')) {
              this.health -= Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and loses ${Potion.value} points of health.`);
            } else if (effect.includes('Restore Magicka')) {
              this.magick += Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and gains ${Potion.value} points of magicka.`);
            } else if (effect.includes('Damage Magicka')) {
              this.magick -= Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and loses ${Potion.value} points of magicka.`);
            } else if (effect.includes('Restore Stamina')) {
              this.stamina += Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and gains ${Potion.value} points of stamina.`);
            } else if (effect.includes('Damage Stamina')) {
              this.stamina -= Potion.value;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and loses ${potion.value} points of stamina.`);
            } else {
              // Otros efectos suman 1 punto a todos los atributos
              this.health += 1;
              this.magick += 1;
              this.stamina += 1;
              console.log(`${this.fullName} drinks a potion with effect ${effect} and gains 1 point in all attributes.`);
            }
          });
    
          // Verificar si Joseph ha muerto o si el juego ha terminado
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
    
          // Mostrar los atributos actuales después de cada poción
          console.log(`Health: ${this.health}`);
          console.log(`Magick: ${this.magick}`);
          console.log(`Stamina: ${this.stamina}`);
          console.log('------------------------------');
        }
    }
  }
  
  export { Character };
  