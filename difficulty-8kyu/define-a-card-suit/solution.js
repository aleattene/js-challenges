/*
JS solution for challenge: "Define a Card Suit"
To test the solution type from the CLI: node .\solution.js
*/

function defineSuit(card) {
    let cards = {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}
    return cards[card[(card.length) -1]]
}


// ALL TESTS
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
// SIMPLE TESTS
assert.strictEqual(defineSuit('3♣'), 'clubs');
assert.strictEqual(defineSuit('Q♠'), 'spades');
assert.strictEqual(defineSuit('9♦'), 'diamonds');
assert.strictEqual(defineSuit('J♥'), 'hearts');
// ADVANCED TESTS
assert.strictEqual(defineSuit('3♣'), 'clubs');
assert.strictEqual(defineSuit('7♦'), 'diamonds');
assert.strictEqual(defineSuit('Q♠'), 'spades');
assert.strictEqual(defineSuit('K♣'), 'clubs');
assert.strictEqual(defineSuit('4♦'), 'diamonds');
assert.strictEqual(defineSuit('A♣'), 'clubs');
assert.strictEqual(defineSuit('7♠'), 'spades');
assert.strictEqual(defineSuit('10♦'), 'diamonds');
assert.strictEqual(defineSuit('10♠'), 'spades');
assert.strictEqual(defineSuit('10♥'), 'hearts');
assert.strictEqual(defineSuit('10♣'), 'clubs');

// FINAL RESULT
console.log("ALL TESTS PASSED")