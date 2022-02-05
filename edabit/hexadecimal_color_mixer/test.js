
const solution = require('./solution');


test("Hexadecimal Color Mixer", () => {
    expect(solution.hexColorMixer(["#CCCCCC"]))
        .toBe("#CCCCCC");
    expect(solution.hexColorMixer(["#FFFF00", "#FF0000"]))
        .toBe("#FF8000");
    expect(solution.hexColorMixer(["#FFFF00", "#0000FF"]))
        .toBe("#808080");
    expect(solution.hexColorMixer(["#B60E73", "#0EAEB6"]))
        .toBe("#625E95");
    expect(solution.hexColorMixer(["#FF0000", "#00FF00", "#0000FF"]))
        .toBe("#555555");
    expect(solution.hexColorMixer(["#99CC00", "#663399", "#1A8191"]))
        .toBe("#5E8063");
    expect(solution.hexColorMixer(["#140A23", "#46B31E", "#CFDF08", "#263534", "#EAD1FB", "#235E02"]))
        .toBe("#65803F");
    expect(solution.hexColorMixer(["#FFFFFF", "#000000", "#000000", "#FFFFFF"]))
        .toBe("#808080");
});
