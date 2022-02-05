
const solution = require('./solution');


test("Smallest and biggest numbers", () => {
    expect(solution.minMaxNumbers([14, 35, 6, 1, 34, 54])).toStrictEqual([1, 54]);
    expect(solution.minMaxNumbers([1.346, 1.6532, 1.8734, 1.8723])).toStrictEqual([1.346, 1.8734]);
    expect(solution.minMaxNumbers([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toStrictEqual([0.2345, 0.984]);
    expect(solution.minMaxNumbers([13, 72, 98, 43, 24, 65, 31])).toStrictEqual([13, 98]);
    expect(solution.minMaxNumbers([-54, -23, -54, -21])).toStrictEqual([-54, -21]);
    expect(solution.minMaxNumbers([-0.473, -0.6834, -0.1287, 0.5632])).toStrictEqual([-0.6834, 0.5632]);
    expect(solution.minMaxNumbers([0, 0, 0, 0])).toStrictEqual([0, 0]);
});
