const positive_effect_tokens = ["Fortify", "Resist", "Cure", "Restore", "Regenerate", "Invisibility", "Waterbreathing"];

class Effect {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    static from(name) {
        const type = positive_effect_tokens.some(token => name.includes(token)) ? 'beneficial' : 'harmful';
        return new Effect(name, type);
    }
}
export { Effect };

