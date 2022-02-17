

function count(deck) {
    const scores = {
        2: 1, 3: 1, 4: 1, 5: 1, 6: 1,
        7: 0, 8: 0, 9: 0,
        10: -1, "J": -1, "Q": -1, "K": -1, "A": -1
    };
    return deck.map(x => scores[x]).reduce((acc, curr) => acc + curr, 0);
}


module.exports = {
    count
};