class Potion {
    constructor(name, value, weight, time, effects) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.time = time;
        this.effects = effects
    }

    static failed() {
        return new FailedPotion();
    }

    static sanity() {
        return new PotionOfSanity();
    }
    static with(effect, weight, value) {
        const type = effect.type === 'beneficial' ? "Potion" : "Poison";
        const potion_name = `${type} of ${effect.name}`;
        const time = 10;
        return new Potion(potion_name, value, weight, time);
    }
    
}

class PotionOfSanity extends Potion {
    constructor() {
        super("Potion of Sanity", 1000, 1, 50);
    }
}

class FailedPotion extends Potion {
    constructor() {
        super("Failed potion", 0, 0, 0);
    }
}
export { Potion, PotionOfSanity, FailedPotion };
