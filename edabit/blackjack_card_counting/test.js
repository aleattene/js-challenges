

const solution = require('./solution');


test("BlackJack Card Counting", () => {
    expect(solution.count([5, 9, 10, 3, 'J', 'A', 4, 8, 5])).toBe(1);
    expect(solution.count(['A', 'A', 'K', 'Q', 'Q', 'J'])).toBe(-6);
    expect(solution.count(['A', 5, 5, 2, 6, 2, 3, 8, 9, 7])).toBe(5);
    expect(solution.count([2, 2, 2, 2, 2, 2, 2, 2])).toBe(8);
    expect(solution.count(['A', 'A', 'A', 'A', 'A', 'A', 'A'])).toBe(-7);
    expect(solution.count(['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2])).toBe(0);
    expect(solution.count([])).toBe(0);
});