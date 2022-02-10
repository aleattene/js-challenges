

function sexagenary(year) {
    const elements = ["Wood", "Wood", "Fire", "Fire", "Earth",
                        "Earth", "Metal", "Metal", "Water", "Water"]
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
                    "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"]
    let new_year = Math.abs(1984 - year);
    if (year < 1984) {
        new_year = 60 - new_year;
    }
    return `${elements[new_year % 10]} ${animals[new_year % 12]}`
}

module.exports = {
    sexagenary
}