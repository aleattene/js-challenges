
// STATIC DATA STRUCTURE
pk_data = {
    1: ["grass", "poison"], 2: ["grass", "poison"], 3: ["grass", "poison"], 4: ["fire"], 5: ["fire"],
    6: ["fire", "flying"], 7: ["water"], 8: ["water"], 9: ["water"], 10: ["bug"], 11: ["bug"], 12: ["bug", "flying"],
    13: ["bug", "poison"], 14: ["bug", "poison"], 15: ["bug", "poison"], 16: ["normal", "flying"],
    17: ["normal", "flying"], 18: ["normal", "flying"], 19: ["normal"], 20: ["normal"], 21: ["normal", "flying"],
    22: ["normal", "flying"], 23: ["poison"], 24: ["poison"], 25: ["electric"], 26: ["electric"], 27: ["ground"],
    28: ["ground"], 29: ["poison"], 30: ["poison"], 31: ["poison", "ground"], 32: ["poison"], 33: ["poison"],
    34: ["poison", "ground"], 35: ["normal"], 36: ["normal"], 37: ["fire"], 38: ["fire"], 39: ["normal"],
    40: ["normal"], 41: ["poison"], 42: ["poison", "flying"], 43: ["grass", "poison"], 44: ["grass", "poison"],
    45: ["grass", "poison"], 46: ["bug", "grass"], 47: ["bug", "grass"], 48: ["bug", "poison"], 49: ["bug", "poison"],
    50: ["ground"], 51: ["ground"], 52: ["normal"], 53: ["normal"], 54: ["water"], 55: ["water"], 56: ["fighting"],
    57: ["fighting"], 58: ["fire"], 59: ["fire"], 60: ["water"], 61: ["water"], 62: ["water", "fighting"],
    63: ["psychic"], 64: ["psychic"], 65: ["psychic"], 66: ["fighting"], 67: ["fighting"], 68: ["fighting"],
    69: ["grass", "poison"], 70: ["grass", "poison"], 71: ["grass", "poison"], 72: ["water", "poison"],
    73: ["water", "poison"], 74: ["rock", "ground"], 75: ["rock", "ground"], 76: ["rock", "ground"], 77: ["fire"],
    78: ["fire"], 79: ["water", "psychic"], 80: ["water", "psychic"], 81: ["electric"], 82: ["electric"],
    83: ["normal", "flying"], 84: ["normal", "flying"], 85: ["normal", "flying"], 86: ["water"], 87: ["water", "ice"],
    88: ["poison"], 89: ["poison"], 90: ["water"], 91: ["water", "ice"], 92: ["ghost", "poison"],
    93: ["ghost", "poison"], 94: ["ghost", "poison"], 95: ["rock", "ground"], 96: ["psychic"], 97: ["psychic"],
    98: ["water"], 99: ["water"], 100: ["electric"]
}
type_effectiveness = {
    'bug':
        {'bug': 1, 'electric': 1, 'fighting': 0.5, 'fire': 0.5, 'flying': 0.5, 'ghost': 0.5, 'grass': 2, 'ground': 1,
            'ice': 1, 'normal': 1, 'poison': 0.5, 'psychic': 2, 'rock': 1, 'water': 1},
    'electric':
        {'bug': 1, 'electric': 0.5, 'fighting': 1, 'fire': 1, 'flying': 2, 'ghost': 1, 'grass': 0.5, 'ground': 0,
            'ice': 1, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 1, 'water': 2},
    'fighting':
        {'bug': 0.5, 'electric': 1, 'fighting': 1, 'fire': 1, 'flying': 0.5, 'ghost': 0, 'grass': 1, 'ground': 1,
            'ice': 2, 'normal': 2, 'poison': 0.5, 'psychic': 0.5, 'rock': 2, 'water': 1},
    'fire':
        {'bug': 2, 'electric': 1, 'fighting': 1, 'fire': 0.5, 'flying': 1, 'ghost': 1, 'grass': 2, 'ground': 1,
            'ice': 2, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 0.5, 'water': 0.5},
    'flying':
        {'bug': 2, 'electric': 0.5, 'fighting': 2, 'fire': 1, 'flying': 1, 'ghost': 1, 'grass': 2, 'ground': 1,
            'ice': 1, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 0.5, 'water': 1},
    'ghost':
        {'bug': 1, 'electric': 1, 'fighting': 1, 'fire': 1, 'flying': 1, 'ghost': 2, 'grass': 1, 'ground': 1,
            'ice': 1, 'normal': 0, 'poison': 1, 'psychic': 2, 'rock': 1, 'water': 1},
    'grass':
        {'bug': 0.5, 'electric': 1, 'fighting': 1, 'fire': 0.5, 'flying': 0.5, 'ghost': 1, 'grass': 0.5,
            'ground': 2, 'ice': 1, 'normal': 1, 'poison': 0.5, 'psychic': 1, 'rock': 2, 'water': 2},
    'ground':
        {'bug': 0.5, 'electric': 2, 'fighting': 1, 'fire': 2, 'flying': 0, 'ghost': 1, 'grass': 0.5, 'ground': 1,
            'ice': 1, 'normal': 1, 'poison': 2, 'psychic': 1, 'rock': 2, 'water': 1},
    'ice':
        {'bug': 1, 'electric': 1, 'fighting': 1, 'fire': 0.5, 'flying': 2, 'ghost': 1, 'grass': 2, 'ground': 2,
            'ice': 0.5, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 1, 'water': 0.5},
    'normal':
        {'bug': 1, 'electric': 1, 'fighting': 1, 'fire': 1, 'flying': 1, 'ghost': 0, 'grass': 1, 'ground': 1,
            'ice': 1, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 0.5, 'water': 1},
    'poison':
        {'bug': 1, 'electric': 1, 'fighting': 1, 'fire': 1, 'flying': 1, 'ghost': 0.5, 'grass': 2, 'ground': 0.5,
            'ice': 1, 'normal': 1, 'poison': 0.5, 'psychic': 1, 'rock': 0.5, 'water': 1},
    'psychic':
        {'bug': 1, 'electric': 1, 'fighting': 2, 'fire': 1, 'flying': 1, 'ghost': 1, 'grass': 1, 'ground': 1,
            'ice': 1, 'normal': 1, 'poison': 2, 'psychic': 0.5, 'rock': 1, 'water': 1},
    'rock':
        {'bug': 2, 'electric': 1, 'fighting': 0.5, 'fire': 2, 'flying': 2, 'ghost': 1, 'grass': 1, 'ground': 0.5,
            'ice': 2, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 1, 'water': 1},
    'water':
        {'bug': 1, 'electric': 1, 'fighting': 1, 'fire': 2, 'flying': 1, 'ghost': 1, 'grass': 0.5, 'ground': 2,
            'ice': 1, 'normal': 1, 'poison': 1, 'psychic': 1, 'rock': 2, 'water': 0.5}
}

// HELPER FUNCTION
function fight(attributes_pk_one, attributes_pk_two) {

    const scores = [];

    attributes_pk_one.forEach(attribute_pk_one => {
        let mul = 1;

        attributes_pk_two.forEach(attribute_pk_two => {
            mul *= type_effectiveness[attribute_pk_one][attribute_pk_two];
        });

        scores.push(mul);
    });

    return scores;
}

// HELPER FUNCTION
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}


// MAIN FUNCTION
function pkSpecialWinner(pk1, pk2) {

    const reducer = (accumulator, curr) => accumulator + curr;

    const fight_pk1_pk2 = fight(pk_data[pk1], pk_data[pk2]);
    const fight_pk2_pk1 = fight(pk_data[pk2], pk_data[pk1]);

    const final_scores = {}
    final_scores[pk1] = fight_pk1_pk2.reduce(reducer) / fight_pk1_pk2.length
    final_scores[pk2] = fight_pk2_pk1.reduce(reducer) / fight_pk2_pk1.length

    const winner_score = Math.max(final_scores[pk1], final_scores[pk2]);
    const pk_winner = getKeyByValue(final_scores, winner_score);

    return final_scores[pk1] === final_scores[pk2] ? -1 : parseInt(pk_winner);
}


// MODULE EXPORT
module.exports = {
    pkSpecialWinner
}


