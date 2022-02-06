
const solution = require('./solution');


test("Define a card suit", () => {
    expect(solution.defineSuit('3♣')).toBe('clubs');
    expect(solution.defineSuit('Q♠')).toBe('spades');
    expect(solution.defineSuit('9♦')).toBe('diamonds');
    expect(solution.defineSuit('J♥')).toBe('hearts');
    expect(solution.defineSuit('7♦')).toBe('diamonds');
    expect(solution.defineSuit('K♣')).toBe('clubs');
    expect(solution.defineSuit('4♦')).toBe('diamonds');
    expect(solution.defineSuit('A♣')).toBe('clubs');
    expect(solution.defineSuit('7♠')).toBe('spades');
    expect(solution.defineSuit('10♦')).toBe('diamonds');
    expect(solution.defineSuit('10♠')).toBe('spades');
    expect(solution.defineSuit('10♥')).toBe('hearts');
    expect(solution.defineSuit('10♣')).toBe('clubs');
});