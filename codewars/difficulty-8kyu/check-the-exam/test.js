
const solution = require('./solution');


test("Check the exam", () => {
    expect(solution.checkExam(["a","a","b","b"], ["a","c","b","d"])).toBe(6);
    expect(solution.checkExam(["a","a","c","b"], ["a","a","b",""])).toBe(7);
    expect(solution.checkExam(["a","a","b","c"], ["a","a","b","c"])).toBe(16);
    expect(solution.checkExam(["b","c","b","a"], ["","a","a","c"])).toBe(0);
    expect(solution.checkExam(["c","c","a","c"], ["","","c",""])).toBe(0);
    expect(solution.checkExam(["a","b","c","b","c","a"],["b","c","c","a","b",""])).toBe(0);
    expect(solution.checkExam(["a","c","c","c","b","b"],["c","","","","b","a"])).toBe(2);
    expect(solution.checkExam(["c","a","b","a","b","a","b"],["b","b","a","b","c","b","a"])).toBe(0);
    expect(solution.checkExam(["b","a","b","c"],["","b","a",""])).toBe(0);
    expect(solution.checkExam(["a","c","a","c","a","a","b"],["c","a","a","b","b","",""])).toBe(0);
    expect(solution.checkExam(["a","b","c","a","c","a","a"], ["a","b","c","","b","a","b"])).toBe(14);
    expect(solution.checkExam(["a","c","c","b","c","a","a"],["c","a","b","c","b","c",""])).toBe(0);
    expect(solution.checkExam(["b","b","c","b","a"],["","","b","a",""])).toBe(0);
    expect(solution.checkExam(["a","b","b","c","a","b","a","b","c","c"],
    ["b","","a","","b","b","a","b","a","c"])).toBe(12);
    expect(solution.checkExam(["c","a","a","b","c","c","c","b"],
    ["c","","a","b","c","a","a","b"])).toBe(18);
    expect(solution.checkExam(["b","c","a","b","a","c","c","a","b","c","b","c","a","b","c"],
    ["","a","","a","","","","b","","a","","","c","c","a"])).toBe(0);
    expect(solution.checkExam(["b","a","b","a","c","a","c","b","c","c","b","b","c","c","c","a","b","b"],
    ["","a","c","b","","c","c","","a","c","","b","c","c","c","a","b","a"])).toBe(31);
    expect(solution.checkExam(["a","a","b","c","c","c","b","a","a","a","c","b","a","a","c"],
    ["c","b","","b","b","c","b","c","","a","","b","a","c",""])).toBe(14);
    expect(solution.checkExam(["b","c","b","b","a","b","c","c","c","a","a","c","b","c"],
    ["b","a","","a","a","","a","c","c","a","","b","a","c"])).toBe(19);
    expect(solution.checkExam(["c","b","a","c","c","a","c","c","c"],
    ["a","b","a","b","b","c","b","c","b"])).toBe(6);
    expect(solution.checkExam(["a","c","a","c","b","b","a","c","a","b","c","a","c","a","a","c"],
    ["","b","a","","b","c","b","","a","","","b","b","a","a","c"])).toBe(19);
    expect(solution.checkExam(["c","b","a","a","a","b","c","a","a","c","c","c","a","b","b","a","b","b"],
    ["b","","b","","c","c","c","b","","c","","c","a","b","","","b","a"])).toBe(18);
    expect(solution.checkExam(["a","c","a","b","b","b","c","c","a"],
    ["c","b","","b","","c","b","","a"])).toBe(4);
    expect(solution.checkExam(["c","a","b","a","a","c","b","b","c","a","a","a","c","c","a","b","b","c"],
    ["a","","a","a","","b","","b","a","","c","b","a","","","a","b","b"])).toBe(3);
    expect(solution.checkExam(["a","c","c","c","a","a","c","c","a","c","b","a","c","c","c","c","b"],
    ["c","a","a","c","a","","a","c","b","","","c","a","a","a","b","a"])).toBe(1);
    expect(solution.checkExam(["c","a","c","a","a","b","b","c","b","b","b","b","b","c"],
    ["c","a","a","a","c","","a","b","b","a","a","","",""])).toBe(10);
    expect(solution.checkExam(["c","b","a","b","b","c","b","c","b","c","c","a","c","a","b","c","a","c"],
    ["a","c","","a","c","b","b","a","b","","a","a","c","a","a","a","",""])).toBe(11);
    expect(solution.checkExam(["a","a","b","a","b","c","a","a","b","b","b","b","b","b","a","c","a"],
    ["","a","c","","","a","a","b","c","","b","b","a","a","","","a"])).toBe(14);
    expect(solution.checkExam(["c","a","a","c","a","a","c","c","b","c","a","b","c","a","b","b","c","a"],
    ["","b","","a","b","c","c","c","","","b","c","a","a","b","c","b",""])).toBe(7);
    expect(solution.checkExam(["c","a","b","a","b","b","c","b","a","a","c","a","c","b"],
    ["","c","a","a","b","c","a","","a","c","b","a","","b"])).toBe(14);
    expect(solution.checkExam(["b","a","c","a","c","a","a","a","b","a","a","b","c","b"],
    ["a","b","c","","","b","c","a","b","c","a","b","a",""])).toBe(14);
    expect(solution.checkExam(["a","a","a","b","a","a","b","a","a","b"],
    ["b","b","a","c","","b","","a","a",""])).toBe(8);
    expect(solution.checkExam(["b","a","a","a","a","a","c","b","a","c"],
    ["a","c","a","b","a","","b","a","c","a"])).toBe(1);
    expect(solution.checkExam(["a","a","b","b","a","c","a","c","a","b","a","a","b","c"],
    ["a","","b","a","","","b","c","c","","","","b",""])).toBe(13);
});