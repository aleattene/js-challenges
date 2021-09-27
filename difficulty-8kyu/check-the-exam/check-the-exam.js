

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

// FINAL RESULT
console.log("ALL TESTS PASSED")