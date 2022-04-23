
const solution = require('./solution');


test("Check same case", () => {
    expect(solution.sameCase('C', 'B')).toBe(1);
    expect(solution.sameCase('b', 'a')).toBe(1);
    expect(solution.sameCase('d', 'd')).toBe(1);
    expect(solution.sameCase('A', 's')).toBe(0);
    expect(solution.sameCase('c', 'B')).toBe(0);
    expect(solution.sameCase('b', 'Z')).toBe(0);
    expect(solution.sameCase('\t', 'Z')).toBe(-1);
    expect(solution.sameCase('z', '\t')).toBe(-1);
    expect(solution.sameCase('H', ':')).toBe(-1);
});