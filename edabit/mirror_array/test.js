
const solution = require('./solution');


test("Mirror Array", () => {
    expect(solution.mirror([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    expect(solution.mirror([0, 2, 4, 6])).toStrictEqual([0, 2, 4, 6, 4, 2, 0]);
    expect(solution.mirror([1, 2, 2, 3, 3, 4])).toStrictEqual([1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1]);
});