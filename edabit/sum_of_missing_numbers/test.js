
const solution = require('./solution');


test("Sum of missing numbers", () => {
    expect(solution.sumMissingNumbers([1, 3, 5, 7, 10])).toBe(29);
    expect(solution.sumMissingNumbers([10, 20, 30, 40, 50, 60])).toBe(1575);
    expect(solution.sumMissingNumbers([7, 3, 8, 5, 12])).toBe(40);
    expect(solution.sumMissingNumbers([99, 2, 45, 4, 17])).toBe(4782);
    expect(solution.sumMissingNumbers([10, 7, 5, 3, 1])).toBe(29);
    expect(solution.sumMissingNumbers([7, 8, 9, 10])).toBe(0);
});