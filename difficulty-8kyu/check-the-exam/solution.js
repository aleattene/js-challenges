/*
JS solution for challenge: "Check the exam"
To test the solution type from the CLI: node .\solution.js
*/

function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++){
        if (array1[i] === array2[i]) {
            score += 4;
        } else if (array1[i] !== array2[i] && array2[i] !== "") {
            score += -1;
        }
    }
    return (score < 0) ? 0 : score
}


// ALL TESTS
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
// SIMPLE TESTS
assert.strictEqual(checkExam(["a","a","b","b"], ["a","c","b","d"]), 6);
assert.strictEqual(checkExam(["a","a","c","b"], ["a","a","b",""]), 7);
assert.strictEqual(checkExam(["a","a","b","c"], ["a","a","b","c"]), 16);
assert.strictEqual(checkExam(["b","c","b","a"], ["","a","a","c"]), 0);
assert.strictEqual(checkExam(["c","c","a","c"], ["","","c",""]), 0);
assert.strictEqual(checkExam(["a","b","c","b","c","a"],["b","c","c","a","b",""]), 0);
assert.strictEqual(checkExam(["a","c","c","c","b","b"],["c","","","","b","a"]), 2);
assert.strictEqual(checkExam(["c","a","b","a","b","a","b"],["b","b","a","b","c","b","a"]), 0);
assert.strictEqual(checkExam(["b","a","b","c"],["","b","a",""]), 0);
assert.strictEqual(checkExam(["a","c","a","c","a","a","b"],["c","a","a","b","b","",""]), 0);
assert.strictEqual(checkExam(["a","b","c","a","c","a","a"], ["a","b","c","","b","a","b"]), 14);
assert.strictEqual(checkExam(["a","c","c","b","c","a","a"],["c","a","b","c","b","c",""]), 0);
assert.strictEqual(checkExam(["b","b","c","b","a"],["","","b","a",""]), 0);
// ADVANCED TESTS
assert.strictEqual(checkExam(["a","b","b","c","a","b","a","b","c","c"],
    ["b","","a","","b","b","a","b","a","c"]), 12);
assert.strictEqual(checkExam(["c","a","a","b","c","c","c","b"],
    ["c","","a","b","c","a","a","b"]), 18);
assert.strictEqual(checkExam(["b","c","a","b","a","c","c","a","b","c","b","c","a","b","c"],
    ["","a","","a","","","","b","","a","","","c","c","a"]), 0);
assert.strictEqual(checkExam(["b","a","b","a","c","a","c","b","c","c","b","b","c","c","c","a","b","b"],
    ["","a","c","b","","c","c","","a","c","","b","c","c","c","a","b","a"]), 31);
assert.strictEqual(checkExam(["a","a","b","c","c","c","b","a","a","a","c","b","a","a","c"],
    ["c","b","","b","b","c","b","c","","a","","b","a","c",""]), 14);
assert.strictEqual(checkExam(["b","c","b","b","a","b","c","c","c","a","a","c","b","c"],
    ["b","a","","a","a","","a","c","c","a","","b","a","c"]), 19);
assert.strictEqual(checkExam(["c","b","a","c","c","a","c","c","c"],
    ["a","b","a","b","b","c","b","c","b"]), 6);
assert.strictEqual(checkExam(["a","c","a","c","b","b","a","c","a","b","c","a","c","a","a","c"],
    ["","b","a","","b","c","b","","a","","","b","b","a","a","c"]), 19);
assert.strictEqual(checkExam(["c","b","a","a","a","b","c","a","a","c","c","c","a","b","b","a","b","b"],
    ["b","","b","","c","c","c","b","","c","","c","a","b","","","b","a"]), 18);
assert.strictEqual(checkExam(["a","c","a","b","b","b","c","c","a"],
    ["c","b","","b","","c","b","","a"]), 4);
assert.strictEqual(checkExam(["c","a","b","a","a","c","b","b","c","a","a","a","c","c","a","b","b","c"],
    ["a","","a","a","","b","","b","a","","c","b","a","","","a","b","b"]), 3);
assert.strictEqual(checkExam(["a","c","c","c","a","a","c","c","a","c","b","a","c","c","c","c","b"],
    ["c","a","a","c","a","","a","c","b","","","c","a","a","a","b","a"]), 1);
assert.strictEqual(checkExam(["c","a","c","a","a","b","b","c","b","b","b","b","b","c"],
    ["c","a","a","a","c","","a","b","b","a","a","","",""]), 10);
assert.strictEqual(checkExam(["c","b","a","b","b","c","b","c","b","c","c","a","c","a","b","c","a","c"],
    ["a","c","","a","c","b","b","a","b","","a","a","c","a","a","a","",""]), 11);
assert.strictEqual(checkExam(["a","a","b","a","b","c","a","a","b","b","b","b","b","b","a","c","a"],
    ["","a","c","","","a","a","b","c","","b","b","a","a","","","a"]), 14);
assert.strictEqual(checkExam(["c","a","a","c","a","a","c","c","b","c","a","b","c","a","b","b","c","a"],
    ["","b","","a","b","c","c","c","","","b","c","a","a","b","c","b",""]), 7);
assert.strictEqual(checkExam(["c","a","b","a","b","b","c","b","a","a","c","a","c","b"],
    ["","c","a","a","b","c","a","","a","c","b","a","","b"]), 14);
assert.strictEqual(checkExam(["b","a","c","a","c","a","a","a","b","a","a","b","c","b"],
    ["a","b","c","","","b","c","a","b","c","a","b","a",""]), 14);
assert.strictEqual(checkExam(["a","a","a","b","a","a","b","a","a","b"],
    ["b","b","a","c","","b","","a","a",""]), 8);
assert.strictEqual(checkExam(["b","a","a","a","a","a","c","b","a","c"],
    ["a","c","a","b","a","","b","a","c","a"]), 1);
assert.strictEqual(checkExam(["a","a","b","b","a","c","a","c","a","b","a","a","b","c"],
    ["a","","b","a","","","b","c","c","","","","b",""]), 13);

// FINAL RESULT
console.log("ALL TESTS PASSED")