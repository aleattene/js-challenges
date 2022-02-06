

function defineSuit(card) {
    let cards = {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}
    return cards[card[(card.length) -1]]
}

module.exports = {
    defineSuit
}